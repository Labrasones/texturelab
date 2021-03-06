import { BrickGeneratorNode } from "./v1/brickgenerator";
import { NormalMapNode, BetterWarpNode } from "./v1/normalmap";
import { CellNode } from "./v1/cellnode";
import { SolidCellNode } from "./v1/solidcell";
import { LineCellNode } from "./v1/linecell";
import { PolygonNode, CircleNode } from "./v1/shapes";
import { BlendNode } from "./v1/blend";
import { InvertNode } from "./v1/invert";
import { WarpNode } from "./v1/warp";
import { ColorNode, ColorizeNode } from "./v1/color";
import { SimplexNoiseNode } from "./v1/simplexnoise";
import { MaskNode } from "./v1/mask";
import { Transform2DNode } from "./v1/transform2d";
import { MapRangeNode } from "./v1/maprange";
import { Perlin3DNode } from "./v1/perlin3d";
import { HexagonNode } from "./v1/hexagon";
import { FractalNoiseNode } from "./v1/fractalnoise";
import { TileNode } from "./v1/tile";
import { ThresholdNode } from "./v1/threshold";
import { HeightShiftNode } from "./v1/heightshift";
import { CheckerBoardNode } from "./v1/checkerboard";
import { DirectionalWarpNode } from "./v1/directionalwarp";
import { MirrorNode } from "./v1/mirror";
import { BrightnessContrastNode } from "./v1/brightnesscontrast";
import { WaveNode } from "./v1/wave";
import { CopyNode } from "./v1/copy";
import { GradientNode, TriGradientNode } from "./v1/gradient";
import { DesignerLibrary } from "../designer/library";
import { OutputNode } from "./v1/output";
import { GradientMapNode } from "./v1/gradientmap";
import { SplatNodeV2 } from "./v2/splat";
import { BlurV2 } from "./v2/blur";
import { AdvanceSplatterV2 } from "./v2/advancesplatter";
import { SlopeBlur } from "./v2/slopeblur";
import { TileSampler } from "./v2/tilesampler";

export function createLibrary() {
	var lib = new DesignerLibrary();
	lib.versionName = "v2";
	lib.addNode("brickgenerator", "Brick Generator", BrickGeneratorNode);
	lib.addNode("normalmap", "Normal Map", NormalMapNode);
	lib.addNode("cell", "Cell", CellNode);
	lib.addNode("solidcell", "Solid Cell", SolidCellNode);
	lib.addNode("linecell", "Line Cell", LineCellNode);
	lib.addNode("circle", "Circle", CircleNode);
	lib.addNode("polygon", "Polygon", PolygonNode);
	lib.addNode("blend", "Blend", BlendNode);
	lib.addNode("invert", "Invert", InvertNode);
	lib.addNode("warp", "Warp", WarpNode);
	lib.addNode("color", "Color", ColorNode);
	lib.addNode("colorize", "Colorize", ColorizeNode);
	lib.addNode("simplexnoise", "Simplex Noise", SimplexNoiseNode);
	lib.addNode("mask", "Mask", MaskNode);
	lib.addNode("transform2d", "Transform2D", Transform2DNode);
	lib.addNode("maprange", "Map Range", MapRangeNode);
	lib.addNode("splat", "Splat", SplatNodeV2);
	lib.addNode("perlin3d", "Perlin 3D", Perlin3DNode);
	lib.addNode("hexagon", "Hexagon", HexagonNode);
	lib.addNode("fractalnoise", "Fractal Noise", FractalNoiseNode);
	lib.addNode("tile", "Tile", TileNode);
	lib.addNode("threshold", "Threshold", ThresholdNode);
	lib.addNode("heightshift", "Height Shift", HeightShiftNode);
	lib.addNode("checkerboard", "CheckerBoard", CheckerBoardNode);
	lib.addNode("directionalwarp", "Directional Warp", DirectionalWarpNode);
	lib.addNode("mirror", "Mirror", MirrorNode);
	lib.addNode(
		"brightnesscontrast",
		"Brightness Contrast",
		BrightnessContrastNode
	);
	lib.addNode("wave", "Wave", WaveNode);
	lib.addNode("copy", "Copy", CopyNode);
	lib.addNode("gradient", "Gradient", GradientNode);
	lib.addNode("trigradient", "TriGradient", TriGradientNode);
	lib.addNode("output", "Output", OutputNode);
	lib.addNode("gradientmap", "Gradient Map", GradientMapNode);
	lib.addNode("blurv2", "Blur", BlurV2);
	lib.addNode("slopeblur", "Slope Blur", SlopeBlur);
	lib.addNode("advancesplatter", "Advance Splatter", AdvanceSplatterV2);
	lib.addNode("tilesampler", "Tile Sampler", TileSampler);
	// lib.addNode("betterwarp", "Better Warp", BetterWarpNode);

	return lib;
}
