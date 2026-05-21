import fs from 'fs';
import path from 'path';

// Define directories
const distDir = path.resolve('./dist');
const assetsDir = path.join(distDir, 'assets');

try {
  console.log("Running standalone HTML packager...");

  // 1. Read dist/index.html
  let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  // 2. Find asset files dynamically in dist/assets
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(f => f.endsWith('.css'));
  const jsFile = files.find(f => f.endsWith('.js'));
  const imageFile = files.find(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp'));

  if (!cssFile || !jsFile) {
    console.error("Missing CSS or JS in dist/assets!");
    process.exit(1);
  }

  // 3. Read CSS and JS contents
  let cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
  let jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf-8');

  // 4. Base64 encode the portrait image if found
  let base64Image = '';
  if (imageFile) {
    const imagePath = path.join(assetsDir, imageFile);
    const ext = path.extname(imageFile).substring(1);
    const imageBuffer = fs.readFileSync(imagePath);
    base64Image = `data:image/${ext};base64,` + imageBuffer.toString('base64');
    console.log(`Successfully encoded image ${imageFile} to base64! (Length: ${base64Image.length} characters)`);
    
    // Replace custom reference paths with the real Base64 image data-url
    // Vite compiles dynamic image imports to include things like /assets/ name or absolute paths
    const relativeRef = `assets/${imageFile}`;
    const absoluteRef = `/assets/${imageFile}`;
    
    jsContent = jsContent.replaceAll(relativeRef, base64Image);
    jsContent = jsContent.replaceAll(absoluteRef, base64Image);
    jsContent = jsContent.replaceAll(`/${relativeRef}`, base64Image);
    jsContent = jsContent.replaceAll(imageFile, base64Image);
  }

  // 5. Assemble fully self-contained standalone HTML
  // Strip CSS link tags
  html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*["'][^>]*>/gi, '');
  html = html.replace(/<link[^>]*href=["'][^"']*["'][^>]*rel=["']stylesheet["'][^>]*>/gi, '');

  // Strip type="module" script tags
  html = html.replace(/<script[^>]*type=["']module["'][^>]*src=["'][^"']*["'][^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*src=["'][^"']*["'][^>]*type=["']module["'][^>]*><\/script>/gi, '');

  // Define embedded style & script blocks
  const inlineStyles = `<style>\n${cssContent}\n</style>`;
  const inlineScript = `<script type="text/javascript">\n${jsContent.replaceAll('</script>', '<\\/script>')}\n</script>`;

  // Inject into correct places in index.html template
  html = html.replace('</head>', `${inlineStyles}\n</head>`);
  html = html.replace('</body>', `${inlineScript}\n</body>`);

  // Save standalone copies
  fs.writeFileSync(path.resolve('./standalone_portfolio.html'), html);
  fs.writeFileSync(path.join(distDir, 'index_standalone.html'), html);

  console.log("\n=======================================================");
  console.log("SUCCESS: Self-contained standalone HTML file created!");
  console.log("Saved at:");
  console.log("1. /standalone_portfolio.html");
  console.log("2. /dist/index_standalone.html");
  console.log("=======================================================");

} catch (error) {
  console.error("Packager failed:", error);
  process.exit(1);
}
