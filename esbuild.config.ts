import esbuild from "esbuild";

const [, , mode] = process.argv;

const context = await esbuild.context({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  platform: "node",
  format: "esm",
});

switch (mode) {
  case "build": {
    await context.rebuild();
    await context.dispose();
    break;
  }
  case "watch": {
    await context.watch();
    break;
  }
  default: {
    console.error("usage: node esbuild.config.ts (build|watch)");
    process.exit(1);
  }
}
