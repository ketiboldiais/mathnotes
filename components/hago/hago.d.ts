/// <reference types="react" />

import { ReactElement } from 'react';
import { ReactNode } from 'react';

export declare function Adjugate({ children }: {
    children: any;
}): JSX.Element;

export declare type AnalysisType = 'raw' | 'min' | 'max' | 'median' | 'sum' | 'mean' | 'frequency' | 'relative frequency' | 'cumulative relative frequency';

/**
 * @public
 */
export declare type Annotation = string | AntObject;

/**
 * @public AntObject
 * The AntObject is used for annotations.
 *
 * @param val
 * The value of the annotation text to render.
 * @param pos
 * The position of the annotation.
 * @param color
 * The color the annotation text.
 * @param type
 * The type of the annotation text: Either `latex` or `plain`
 * @param className
 * Initializes the class attribute for the AntObject's resulting `<g/>`.
 */
export declare type AntObject = {
    val: string;
    pos?: string;
    color?: string;
    type?: string;
    className?: string;
};

export declare function Arr({ data, pointers }: ArrProps): JSX.Element;

/**
 * @internal
 * The datatype for the `StaticArray` data prop.
 */
export declare type ArrayData = (Datum | number | string)[] | string;

export declare const ArrowHead: ({ id, className, arrowColor, refX, refY, width, height, orient, }: ArrowHeadProps) => ReactElement;

export declare interface ArrowHeadProps {
    id: string;
    className?: string;
    arrowColor?: string;
    refX?: number;
    refY?: number;
    width?: number;
    height?: number;
    orient?: string | number;
}

export declare interface ArrProps {
    data?: (number | string)[];
    pointers?: {
        [k: number]: string;
    };
}

export declare function AVLTree({ data, className, id, r, fontSize, width, height, tw, th, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, narrow, margins, layout, cluster, sibsep, nsibsep, render, }: AVLTreeProps): JSX.Element;

export declare type AVLTreeNode = {
    c: string | number;
    p: string | number;
    h?: boolean;
    hbf?: number;
    id?: string;
    i?: number;
    className?: string;
};

export declare type AVLTreeNodeData = AVLTreeNode[] | [string | number, string | number];

export declare interface AVLTreeProps extends BaseProps {
    data: AVLTreeNodeData;
    edgeLength?: number;
    r?: number;
    kw?: number;
    layout?: 'horizontal' | 'vertical';
    cluster?: boolean;
    tw?: number;
    th?: number;
    sibsep?: number;
    nsibsep?: number;
    narrow?: number;
    render?: renderOptions[];
}

export declare const AxisHorizontal: ({ domain, range, tickSep, markerStart, markerEnd, removeEndTicks, dx, dy, tx, axisLabelArray, fitContent, latex, textAnchor, fontsize, }: AxisProps) => ReactElement;

export declare interface AxisProps {
    domain: number[];
    range: number[];
    tickSep: number;
    markerStart?: string;
    markerEnd?: string;
    dx?: number;
    dy?: number;
    tx?: number;
    ty?: number;
    offsetTick?: number;
    removeEndTicks?: boolean;
    textAnchor?: 'start' | 'middle' | 'end';
    axisLabelArray?: (string | number)[];
    fitContent?: boolean;
    latex?: boolean;
    fontsize?: number;
}

export declare const AxisVertical: ({ domain, range, tickSep, markerStart, markerEnd, removeEndTicks, dx, dy, offsetTick, fitContent, latex, textAnchor, fontsize, }: AxisProps) => ReactElement;

/**
 * @description Hago API
 * This file provides a code level description
 * of Hago.
 */
/**
 * @public BaseProps
 * The underlying interface for all Hago components.
 */
export declare interface BaseProps {
    /**
     * A unique identifier for the diagram.
     */
    id?: string;
    /**
     * An optional string value to set the
     * the diagram container (a DIV element)'s
     * class attribute.
     */
    className?: string;
    /**
     * Scales the diagram in percentage (%)
     * units.
     */
    scale?: number;
    /**
     * Sets the width of the SVG
     * element.
     */
    width?: number;
    /**
     * Sets the height of the SVG
     * element.
     */
    height?: number;
    /**
     * Scales the DIV container's
     * width in (%) units.
     */
    cwidth?: number;
    /**
     * Scales the DIV container's height
     * in (%) units.
     */
    cheight?: number;
    /**
     * Sets the SVG's top-margin
     * from the DIV container.
     */
    marginTop?: number;
    /**
     * Sets the SVG's right-margin
     * from the DIV container.
     */
    marginRight?: number;
    /**
     * Sets the SVG's bottom-margin
     * from the DIV container.
     */
    marginBottom?: number;
    /**
     * Sets the SVG's left-margin
     * from the DIV container.
     */
    marginLeft?: number;
    /**
     * Sets marginTop, marginRight,
     * marginBottom, and marginLeft
     * all at once.
     */
    margins?: [number, number, number, number];
    /**
     * Sets the font size (in rem units)
     */
    fontSize?: number;
}

/**
 * @public
 */
export declare type BinaryTreeNode = [
TreeNode | Literal,
[
TreeNode | Literal,
TreeNode | Literal
]
];

export declare const Board: ({ className, width, height, cwidth, cheight, margins, children, }: BoardProps) => JSX.Element;

/**
 * @public
 */
export declare interface BoardProps {
    className: string;
    width: number;
    height: number;
    cwidth: number;
    cheight: number;
    margins: number[];
    children?: ReactNode;
}

export declare function BoxMatrix({ data, linespace, name, }: TexMatrixProps): JSX.Element;

export declare function BracedMatrix({ data, linespace, name, }: TexMatrixProps): JSX.Element;

export declare function BuildAVLTreeNodes(data: AVLTreeNodeData, uid: string): any[];

export declare function BuildMTreeNodes(data: MTreeNodeData): any[];

export declare function BuildPriorityQueueData(data: PriorityQueueData): {
    output: PriorityQueueDatum[];
    priorities: string[];
};

export declare function calculateTreeSize(_root: any, px?: number): number;

export declare function CartProd({ x, y, className, id }: CartProdProps): JSX.Element;

declare interface CartProdProps {
    x: (string | number)[];
    y: (string | number)[];
    className: string;
    id: string;
}

export declare function Cell({ w, h, pos, fill, stroke, }: CellProps): JSX.Element;

export declare interface CellProps {
    w: number;
    h: number;
    pos?: Point;
    fill?: string;
    stroke?: string;
}

export declare function CircularQueue({ data, index, className, id, width, fontSize, height, iradius, oradius, scale, cwidth, cheight, padding, marginTop, marginRight, marginBottom, marginLeft, margins, }: CircularQueueProps): JSX.Element;

export declare interface CircularQueueProps extends BaseProps {
    data: ArrayData;
    fontSize?: number;
    iradius?: number;
    oradius?: number;
    padding?: number;
    index?: boolean;
}

export declare function Comatrix({ children }: {
    children: any;
}): JSX.Element;

/**
 * @public
 */
export declare type Coordinate = {
    x: number;
    y: number;
};

/**
 * @public
 * Creates a cubic Bezier curve
 */
export declare type CubicBezier = {
    /**
     * @param - start
     * The pull point for the start
     * Note: The point before the this
     * value is the starting point of
     * the cubic Bezier curve.
     */
    startPull: Point;
    /**
     * @param - endPull
     * The pull point for the end point
     * point (the point after this).
     */
    endPull: Point;
    /**
     * @param - end
     * The end of the bezier curve
     */
    end: Point;
};

export declare function DataTable({ data, className, id, latex, output, include, }: DataTableProps): JSX.Element[];

export declare interface DataTableProps {
    data: Tabular | FunctionTest;
    className?: string;
    id: string;
    latex?: boolean;
    output?: OutputType;
    include?: AnalysisType[];
}

/**
 * @public
 * simplest aggregate type in Hago
 */
export declare type Datum = {
    val: string | number;
    id?: string | number;
    group?: string | number;
    ant?: Annotation;
    ptr?: string;
    data?: number;
    class?: string;
};

/**
 * @public
 * An array of Datum object.
 */
export declare type DatumArray = (Datum | number | string)[];

/**
 * @public
 * Used to populate the `DatumPointerArray`
 */
export declare type DatumPointer = {
    val: string;
    i: number;
};

/**
 * @public
 * Used for the pointer array passed to a `StaticArray`
 */
export declare type DatumPointerArray = DatumPointer[];

export declare function Deque({ data, className, id, fontSize, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: DequeProps): JSX.Element;

export declare interface DequeProps extends BaseProps {
    data: DatumArray | ArrayData;
}

export declare function Determinant({ data, linespace, name, children, }: TexMatrixProps): JSX.Element;

export declare function DotProduct({ children }: {
    children: any;
}): JSX.Element;

export declare function DoublyLinkedList({ data, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: LinkedListProps): JSX.Element;

/**
 * @public
 */
export declare type Edge = (string | number)[] | LinkObject | EdgeObject;

/**
 * @public
 * edge array type
 */
export declare type EdgeArray = ((string | number)[] | LinkObject | EdgeObject)[];

/**
 * @public
 * EdgeObject type
 */
export declare type EdgeObject = {
    source: string | number;
    target: string | number;
    name?: string;
    weight?: number;
    className?: string;
};

/**
 * @public
 * Creates an elliptical arc
 */
export declare type EllipticalArc = {
    /**
     * @param - rx
     * The x-radius of the ellipse
     */
    rx: number;
    /**
     * @param - ry
     * The y-radius of the ellipse
     */
    ry: number;
    /**
     * @param - xRotation
     * The arc's rotation along the x-axis
     */
    xRotation: number;
    /**
     * @param - end
     * The end of the bezier curve
     */
    end: Point;
};

export declare function formatStackData(userInputDataArray: StackData): any[];

/**
 * @public
 */
export declare type Frame = {
    v: string | number;
    display?: 'block' | 'none';
    className?: string;
    ptr?: string;
    ant?: Annotation;
    popped?: boolean;
};

/**
 * @public
 */
export declare interface FrameProps {
    width: number;
    height: number;
    stroke: string;
    fill: string;
    className?: string;
    position?: {
        x: number;
        y: number;
    };
}

export declare type FunctionDatum = {
    f: Function;
    scale?: number;
    color?: string;
    dash?: number;
    secant?: SecantDatum;
    integrate?: [number, number, Integral];
    domain?: [number, number];
    image?: [number, number];
    riemann?: RiemannDatum;
    integrationColor?: string;
    id?: string;
    w?: number;
};

export declare type FunctionTest = {
    f: Function[];
    step?: number;
    fLabels?: string[];
    inputLabel?: string[];
    domain?: [number, number];
};

export declare const generateBinaryTreeData: (rawData: any) => any[];

export declare function generateElements(userInputDataArray: StackData | ArrayData | DatumArray): any[];

export declare function generateTreeData(rawData: any[]): any[];

/**
 * Returns a convenient end point
 * to use for intervals, given an array of
 * numbers.
 *
 * For example, given the array:
 *   const x = [3.12, 3.19, 3.2, 4.25, 5.1, 8.9, 9.002, 1.221];
 * Calling:
 *   getConvenientStartingPoint(x);
 * Returns:
 *   9.002500000000001
 */
export declare function getConvenientEndPoint(list: number[]): number;

/**
 * Returns a convenient starting point
 * to use for intervals, given an array of
 * numbers.
 *
 * For example, given the array:
 *   const x = [3.12, 3.19, 3.2, 4.25, 5.1, 8.9, 9.002, 1.221];
 * Calling:
 *   getConvenientStartingPoint(x);
 * Returns:
 *   1.2205000000000001
 */
export declare function getConvenientStartingPoint(list: number[]): number;

export declare function getCumulativeRelativeFrequencies(list: number[]): {};

export declare function getFrequencies(list: number[]): {};

/**
 * Computes the ideal interval width
 * for a given data set.
 * @param number_of_data_values
 *  - The length number of data points (for arrays,
 *    the array length)
 * Example:
 * Given 150 data points, the ideal interval is:
 *   getIntervalWidth(150) => 12
 */
export declare function getIntervalWidth(number_of_data_values: number): number;

export declare function getLowestFraction(n: any): {
    numerator: number;
    denominator: number;
};

export declare function getMax(list: number[]): {
    max: number;
    atIndex: number;
};

/**
 * @description
 * Returns the maximum number of
 * decimal places given each element
 * in the array.
 *
 * For example, given the array:
 *   const x = [1.12, 1.14, 1.21, 1.2, 2.3, 2.12, 2.14]
 *
 * calling:
 *   getMaxPrecision(x)
 *
 * returns:
 *   2
 */
export declare function getMaxPrecision(list: number[]): number;

export declare function getMean(list: number[]): number;

/**
 * @public
 * Gets the median within an array of numbers.
 */
export declare function getMedian(list: number[]): {
    median: number;
    orderedList: number[];
};

export declare function getMin(list: number[]): {
    min: number;
    atIndex: number;
};

/**
 * @description
 * Returns the minimum number of
 * decimal places given each element
 * in the array
 */
export declare function getMinPrecision(list: number[]): number;

/**
 * @public
 * Returns the element in the list
 * with the most decimal places.
 * If there is more than one such element,
 * the last element checked is returned.
 *
 * Example:
 * Given the array:
 *   const x = [3.12, 3.19, 3.2, 4.25, 5.1, 8.9, 9.002, 1.221];
 * Calling:
 *   getMostPrecise(x);
 * Returns:
 *   1.221;
 */
export declare function getMostPrecise(list: number[]): any;

/**
 * @public
 * Returns the smallest most precise number
 * within the array argument.
 *
 * For example, given the array:
 *   const x = [1.23, 1.21, 1.1, 3.2, 5.31, 2.1, 6.31];
 * calling:
 *   getMostPreciseMax(x);
 * returns:
 *   {max: 6.31, atIndex: 1};
 */
export declare function getMostPreciseMax(list: number[]): {
    max: number;
    atIndex: number;
};

/**
 * @public
 * Returns the smallest most precise number
 * within the array argument.
 *
 * For example, given the array:
 *   const x = [1.23, 1.21, 1.1, 3.2, 5.31, 2.1, 6.31];
 * calling:
 *   getMostPreciseMin(x);
 * returns:
 *   {min: 1.21, atIndex: 1};
 */
export declare function getMostPreciseMin(list: number[]): {
    min: number;
    atIndex: number;
};

export declare function getPrecision(val: number): number;

/**
 * @description
 * Returns an array of elements within
 * the precision bound. If no elements are within
 * the precision bound, an empty array is returned.
 *
 * Example:
 * Given the array:
 *  const x = [1.12, 1.14, 1.21, 1.2, 2.3, 2.12, 2.14]
 *
 * Calling:
 *  getPrecisionBoundedList(x, 2);
 *
 * Returns:
 *   [ 1.12, 1.14, 1.21, 2.12, 2.14 ]
 */
export declare function getPrecisionBoundedList(list: number[], precisionBound: number): number[];

export declare function getRelativeFrequencies(list: number[]): {};

export declare function getSum(list: number[]): number;

/**
 * @public Graph
 * Creates a new graph diagram.
 */
export declare function Graph({ data, className, isDirected, id, straightEdge, width, height, scale, cwidth, cheight, radius, fontSize, textOffsetX, textOffsetY, blast, edgeLength, repulsion, marginTop, marginBottom, marginRight, marginLeft, margins, }: GraphProps): JSX.Element;

/**
 * @public GraphProps
 * The props used in the `Graph` component.
 * `GraphProps` inherits all the properties
 * in `BaseProps`.
 */
/**
 * @public
 */
export declare interface GraphProps extends BaseProps {
    /**
     * @public data
     * Takes an array of edges. Either an array of strings
     * or numbers:
     *
     * ["a", "b", "c"]
     *
     * or an array of edge objects:
     *
     * [
     *   {source: "a", target: "b"},
     *   {source: "b", target: "c"},
     * ]
     */
    data: EdgeArray;
    /**
     * @public id
     * A unique id for the diagram. For faster rendering,
     * supply an id. Otherwise, hago will generate a unique id
     * using date.now().
     */
    id?: string;
    /**
     * @public className
     * Supply a class name for the entire diagram.
     * The default name is `hago_graph`.
     */
    className?: string;
    /**
     * @public radius
     * Sets the radius for each node in the graph.
     */
    radius?: number;
    /**
     * @public link
     * Takes either `'line'` or `'path'`. Sets
     * whether the edges between the nodes are rendered
     * as SVG line Datums or SVG path Datums.
     */
    link?: 'line' | 'path';
    /**
     * @public straightEdge
     * Determines whether the edges should be rendered
     * as straight lines.
     */
    straightEdge?: boolean;
    /**
     * @public textOffsetX
     * Sets how much the node text should be offset along
     * the x-axis.
     */
    textOffsetX?: number;
    /**
     * @public textOffsetY
     * Sets how much the node text should be offset along
     * the y-axis.
     */
    textOffsetY?: number;
    /**
     * @public isDirected
     * Sets whether to render arrow heads on the edges.
     * If true, arrow heads are rendered, otherwise, no arrow heads
     * are rendered. This translates to whether the graph is
     * directed or undirected.
     */
    isDirected?: boolean;
    /**
     * @public edgeLength
     * Sets the length of the edges.
     */
    edgeLength?: number;
    /**
     * @public fontSize
     * Sets the font size for the node text.
     */
    fontSize?: number;
    /**
     * @public repulsion
     * Sets how much the graph's nodes "push"
     * each other away.
     */
    repulsion?: number;
    /**
     * @public blast
     * Sets the radial boundaries for each of the graph nodes.
     */
    blast?: number;
}

export declare type HashData = HashDatum[] | Datum[];

export declare type HashDatum = (number | string)[];

export declare function HashTable({ data, className, id, fontsize, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, padding, }: HashTableProps): JSX.Element;

export declare interface HashTableProps extends BaseProps {
    data: HashData;
    fontsize?: number;
    padding?: number;
}

export declare function Histogram({ data, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, tickSep, removeEndTicks, removeEndTickX, removeEndTickY, }: HistogramProps): JSX.Element;

export declare interface HistogramProps extends BaseProps {
    data: [number, number][] | Point[];
    start: number;
    end: number;
    tickSep: number;
    removeEndTicks: boolean;
    removeEndTickX: boolean;
    removeEndTickY: boolean;
}

export declare type HorizontalLineTo = {
    H: Point;
};

export declare type Integral = 'x' | 'y' | Function;

export declare function Inverse({ children }: {
    children: any;
}): JSX.Element;

/**
 * @internal
 * Checks if a user input is a datum
 */
export declare function IsaDatum(datum: any): boolean;

export declare function IsAFunction(datum: any): boolean;

/**
 * @public
 */
export declare function IsaFunctionDatum(datum: any): boolean;

/**
 * @public
 */
export declare function IsALinkObject(datum: any): boolean;

/**
 * @public
 */
export declare function IsANamedPoint(datum: any): boolean;

export declare function IsAnArray(datum: any): boolean;

/**
 * @internal
 * Type checks if an object is an edge object.
 */
export declare function IsAnEdgeObject(datum: any): boolean;

export declare function IsaNumber(datum: any): boolean;

/**
 * @public
 * Checks whether the argument `datum` is of type Point
 */
export declare function IsAPoint(datum: any): boolean;

export declare function IsaScatterDatumObject(datum: any): boolean;

export declare function IsaString(datum: any): boolean;

export declare function IsATupleXY(datum: any): boolean;

/**
 * @public
 */
export declare function IsBinaryTreeNode(datum: any): boolean;

export declare function IsDefined(testSubject: any): boolean;

export declare function IsEven(val: number): boolean;

export declare function IsInteger(val: number): boolean;

/**
 * @public
 * Checks whether `datum` is a literal value
 * @returns boolean
 */
export declare function IsLiteral(datum: any): boolean;

export declare function IsNonNull(testSubject: any): boolean;

export declare function IsNull(testSubject: any): boolean;

export declare const isObjectLiteral: (expression: any) => boolean;

export declare function IsOdd(val: number): boolean;

export declare const IsPriorityQueueDatum: (x: any) => boolean;

/**
 * @public
 */
export declare function IsRegisterObject(datum: any): boolean;

export declare function IsUndefined(testSubject: any): boolean;

export declare function JaggedArray({ data, className, id, width, height, fontSize, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, padding, }: JaggedArrayProps): JSX.Element;

export declare type JaggedArrayData = Datum[][] | Literal[][];

export declare interface JaggedArrayProps extends BaseProps {
    data: JaggedArrayData;
    padding?: number;
}

export declare type Label = string | {
    t: string;
    x?: number;
    y?: number;
    textAnchor?: 'start' | 'middle' | 'end';
};

export declare interface LatexProps {
    text: string;
    offset: {
        x: number;
        y: number;
    };
    dx: number;
    dy: number;
    width: number;
    height: number;
    fontsize: number;
    color: string;
    fitContent: boolean;
    textAlign: 'center' | 'justify' | 'left' | 'right';
    block?: boolean;
}

export declare function Lattice({ data, className, id, width, height, xMax, yMax, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: LatticeProps): JSX.Element;

export declare interface LatticeProps extends BaseProps {
    data: [number, number][];
    xMax: number;
    yMax: number;
}

export declare function Line({ start, end, color, strokeWidth, dash, markerEnd, markerStart, shapeRendering, }: LineProps): JSX.Element;

export declare function LinearRegression(dataset: ScatterData): {
    f: (x: number) => number;
    label: string;
    rsquared: number;
    rsquaredLabel: string;
};

export declare interface LineProps {
    start: Point;
    end: Point;
    color?: string;
    strokeWidth?: number;
    dash?: number;
    markerEnd?: string;
    markerStart?: string;
    shapeRendering?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision';
}

export declare type LineTo = {
    L: Point;
};

export declare function LinkedList({ data, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, isIndexed, }: LinkedListProps): JSX.Element;

/**
 * @public
 */
export declare interface LinkedListProps extends BaseProps {
    data: DatumArray;
    isIndexed?: boolean;
}

/**
 * @public
 */
export declare type LinkObject = {
    link: [string | number, string | number];
    name?: string | number;
    className?: string;
};

export declare function List({ data, pointers, double, }: ListProps): JSX.Element;

export declare interface ListProps {
    data: (number | string)[];
    pointers?: {
        [k: number]: string;
    };
    double?: boolean;
}

/**
 * @public
 * a string, number, or boolean value.
 */
export declare type Literal = string | number | boolean;

export declare type LiteralMatrix = (string | number)[][];

export declare function makeId(HagoClassName?: string): string;

export declare function MakeJaggedArrayData(data: JaggedArrayData): {
    jaggedIndicesArray: Datum[];
    jaggedElementsArray: Datum[];
};

export declare function MakeMatrixData(data: MatrixData, order: 'row' | 'col'): {
    jaggedIndicesArray: Datum[];
    jaggedElementsArray: Datum[];
};

export declare function MakeScatterData(data: ScatterData, start: number, end: number): {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    dataPoints: ScatterDatumObject[];
};

export declare const Marker: ({ id, type, className, arrowColor, radius, refX, refY, width, height, cx, cy, circleFillColor, circleStrokeColor, orient, viewbox, }: MarkerProps) => ReactElement;

export declare interface MarkerProps {
    id: string;
    type?: 'circle' | 'arrow' | 'square';
    className?: string;
    arrowColor?: string;
    refX?: number;
    refY?: number;
    width?: number;
    height?: number;
    radius?: number;
    viewbox?: string;
    cx?: number;
    cy?: number;
    circleFillColor?: string;
    circleStrokeColor?: string;
    orient?: string | number;
}

export declare function Maths({ val, block }: {
    val: any;
    block?: boolean;
}): JSX.Element;

export declare function Matrix({ data, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, order, }: MatrixProps): JSX.Element;

export declare type MatrixData = Datum[][] | Literal[][];

export declare function MatrixDifference({ children }: {
    children: any;
}): JSX.Element;

export declare function MatrixMinor({ children, row, col }: {
    children: any;
    row: any;
    col: any;
}): JSX.Element;

export declare function MatrixModulo({ children }: {
    children: any;
}): JSX.Element;

export declare function MatrixPower({ children }: {
    children: any;
}): JSX.Element;

export declare function MatrixProduct({ children }: {
    children: any;
}): JSX.Element;

export declare interface MatrixProps extends BaseProps {
    data: MatrixData;
    order?: 'row' | 'col';
}

export declare function MatrixQuotient({ children }: {
    children: any;
}): JSX.Element;

export declare function MatrixSum({ children }: {
    children: any;
}): JSX.Element;

export declare function Mem({ data, className, id, endian, addressLength, cellWidth, cellHeight, dataSize, startAddressAt, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: MemProps): JSX.Element;

/**
 * @public
 */
export declare type MemoryDatum = {
    val: Literal;
    a?: string;
    id?: string;
    className: string;
    display?: 'block' | 'none';
    s?: number;
};

/**
 * @public
 */
export declare interface MemProps extends BaseProps {
    data: RegisterArray;
    cellWidth?: number;
    cellHeight?: number;
    dataSize?: number;
    endian?: 'big' | 'little';
    startAddressAt?: number;
    addressLength?: number;
}

export declare function MTree({ data, className, id, fontSize, kw, edgeLength, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, nsep, }: MTreeProps): JSX.Element;

export declare type MTreeNode = {
    c: string | number;
    p: string | number;
    v: string[] | number[];
    h?: boolean;
    id?: string;
    i?: number;
    className?: string;
};

export declare type MTreeNodeData = MTreeNode[];

export declare interface MTreeProps extends BaseProps {
    data: MTreeNodeData;
    edgeLength?: number;
    kw?: number;
    nsep?: [number, number];
}

export declare function Multiplot({ data, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, xDomain, yDomain, yRotate, zRotate, }: MultiplotProps): JSX.Element;

/**
 * @public
 */
export declare interface MultiplotProps extends BaseProps {
    /**
     * Takes a `FunctionDatum` type:
     * - `{f: (x,y) => <body>}`
     */
    data: FunctionDatum[];
    /**
     * A multiplier for the values. Because
     * multivariable functions depend on
     * potentially three different
     * scales, values may have to be multiplied
     * by some constant to render as
     * desired.
     */
    scale?: number;
    /**
     * Rotates the curve along the y-axis.
     */
    yRotate?: number;
    /**
     * Rotates the curve along the z-axis.
     */
    zRotate?: number;
    /**
     * The x-domain for the function's
     * x-input.
     */
    xDomain?: [number, number];
    /**
     * The y-domain for the function's
     * y-input.
     */
    yDomain?: [number, number];
    /**
     * The range of values
     * the function may output.
     */
    zRange?: [number, number];
    /**
     * If true, displays the
     * z-axis. Default false.
     */
    renderXAxis?: boolean;
    /**
     * If true, displays the y-axis.
     * Default false.
     */
    renderYAxis?: boolean;
    /**
     * If true, displays the z-axis.
     * Defaults to false.
     */
    renderZAxis?: boolean;
    /**
     * Sets the number of ticks along the
     * x-axis.
     */
    xTickCount?: number;
    /**
     * Sets the number of ticks along the
     * y-axis.
     */
    yTickCount?: number;
    /**
     * Sets the number of ticks along
     * the z-axis.
     */
    zTickCount?: number;
}

/**
 * @public
 */
export declare type NamedPoint = {
    x: number;
    y: number;
    id?: string;
    group?: string | number;
};

/**
 * @public
 */
export declare type NodeObject = {
    id: string | number;
    className?: string;
    r?: number;
    ant?: AntObject;
};

export declare function Norm({ data, linespace, name, }: TexMatrixProps): JSX.Element;

export declare function Normalize(enteredValue: number, minEntry?: number, maxEntry?: number, normalizedMin?: number, normalizedMax?: number): number;

export declare type OutputType = (AnalysisType | [AnalysisType, string])[];

export declare type ParametricFunctionDatum = {
    x: Function;
    y: Function;
    scale?: number;
    color?: string;
    integrate?: [number, number, Integral];
    integrationColor?: string;
    riemann?: RiemannDatum;
    id?: string;
};

export declare function Path({ start, d, fill, color, strokeWidth, }: PathProps): JSX.Element;

/**
 * @public
 * Sets the data for path attribute.
 * The start point must have already
 * been provided. The `d` attribute
 * string is build in order - from
 * index 0 to the last.
 */
export declare type PathData = (LineTo | HorizontalLineTo | VerticalLineTo | CubicBezier | QuadraticBezier | EllipticalArc)[];

/**
 * @public
 * Initializes the `d` attribute
 * and others
 */
export declare interface PathProps {
    start: StartPoint;
    d: PathData;
    fill?: string;
    color?: string;
    strokeWidth?: number;
}

export declare const Plot: ({ data, className, id, domain, range, ticks, xTicks, yTicks, axesLabels, samples, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: PlotProps) => JSX.Element;

export declare function Plot3D({ cameraParams, z, segments, xMin, gridColor, xMax, xRange, yMin, yMax, yRange, scale, size, }: {
    cameraParams?: {
        fov: number;
        position: number[];
        near: number;
        far: number;
    };
    z: any;
    segments?: number;
    xMin?: number;
    gridColor?: string;
    xMax?: number;
    xRange?: number;
    yMin?: number;
    yMax?: number;
    yRange?: number;
    scale?: number;
    size?: number[];
}): JSX.Element;

/**
 * @public
 */
export declare interface PlotProps extends BaseProps {
    data?: (FunctionDatum | ParametricFunctionDatum | VectorFunctionDatum | TextDatum | PointDatum)[];
    domain?: [number, number];
    range?: [number, number];
    ticks?: number;
    xTicks?: number;
    yTicks?: number;
    samples?: number;
    className?: string;
    id?: string;
    axesLabels?: [Label, Label];
}

export declare type PlotType = 'table' | 'scatter' | 'histogram';

export declare function Pmatrix({ data, linespace, name, }: TexMatrixProps): JSX.Element;

/**
 * @public
 * @type
 * an object {x: n, y: n}, where n is a number type value
 */
export declare type Point = {
    x: number;
    y: number;
    className?: string;
};

/**
 * @public
 */
export declare type PointDatum = {
    /**
     * The (x,y) coordinates of the point
     */
    p: [number, number];
    /**
     * An optional point label
     */
    label?: string;
    /**
     * Optional, offsets the text position
     * along the x-axis.
     */
    dx?: number;
    /**
     * Optional, offsets the text position
     * along the y-axis
     */
    dy?: number;
    /**
     * Optional, sets the radius of the point
     */
    r?: number;
    /**
     * Optional, sets the color of the point.
     */
    c?: string;
    /**
     * Optional, sets whether the point is open or closed.
     * I.e., whether the point is filled or not.
     */
    in?: boolean;
    /**
     * Optional, a CSS class name for styling.
     */
    class?: string;
};

export declare const Polar: ({ data, domain, className, width, height, radius, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: PolarProps) => JSX.Element;

/**
 * @public
 */
export declare interface PolarProps extends BaseProps {
    data: FunctionDatum[];
    radius?: number;
    domain?: number[];
    range?: number[];
    className: string;
}

export declare function PriorityQueue({ data, className, id, fontSize, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: PriorityQueueProps): JSX.Element;

export declare type PriorityQueueData = (string[] | number[])[] | PriorityQueueDatum[];

declare type PriorityQueueDatum = {
    val: string | number;
    p: string | number;
    order?: number;
};

export declare interface PriorityQueueProps extends BaseProps {
    data: PriorityQueueData;
}

/**
 * @public
 * Creates a quadratic Bezier curve
 */
export declare type QuadraticBezier = {
    /**
     * @param - pull
     * The pull point for the start and end points.
     * Note: The point before the this
     * value is the starting point of
     * the cubic Bezier curve.
     */
    pull: Point;
    /**
     * @param - end
     * The end of the bezier curve
     */
    end: Point;
};

export declare function Queue({ data, className, id, fontSize, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: QueueProps): JSX.Element;

/**
 * @public
 */
export declare interface QueueProps extends BaseProps {
    data: ArrayData;
    pointers: DatumPointerArray;
    reverseIndex?: boolean;
    fontSize?: number;
    startIndex?: number;
}

export declare function Quicksort(list: number[]): number[];

/**
 * @public
 */
export declare type RegisterArray = (RegisterObject | MemoryDatum | Literal)[] | string;

/**
 * @public
 */
export declare type RegisterObject = {
    val: MemoryDatum | string | number | boolean;
    a?: string | number;
    id?: string;
    s?: number;
    className?: string;
    display?: 'block' | 'none';
};

export declare type Regression = 'basicLinear';

export declare type renderOptions = 'bf' | 'h';

export declare function ReturnLarger(x: number, y: number): number;

export declare function ReturnSmaller(x: number, y: number): number;

/**
 * @public
 */
export declare type RiemannDatum = {
    m: 'left' | 'right' | 'midpoint';
    dx: number;
    i: [number, number];
    f: 'x' | 'y' | number | Function;
    orient?: 'vertical' | 'horizontal';
    color?: string;
};

export declare function Scatter({ data, regression, r, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, start, end, tickSep, removeEndTicks, removeEndTickX, removeEndTickY, }: ScatterProps): JSX.Element;

export declare type ScatterData = ScatterDatumObject[] | TupleXY[] | TupleXY[][];

export declare type ScatterDatumObject = {
    x: number;
    y: number;
    g: string | number;
    className?: string;
};

export declare interface ScatterProps extends BaseProps {
    data: ScatterData;
    regression?: Regression;
    r?: number;
    start?: number;
    end?: number;
    tickSep?: number;
    removeEndTicks?: boolean;
    removeEndTickX?: boolean;
    removeEndTickY?: boolean;
}

/**
 * @public
 */
export declare type SecantDatum = {
    /**
     * The x-value for the first point
     */
    x0: number;
    /**
     * The x-value for the second point
     */
    x1: number;
    /**
     * An optional color that sets the line
     * color. Defaults to `teal`
     *
     */
    c?: string;
    /**
     * An optional boolean value to
     * render the two points passed.
     * Defaults to `false`.
     */
    renderPoints?: boolean;
    /**
     * An optional boolean value to render
     * the the formula of the secant line.
     * Defaults to `false`.
     */
    renderFormula?: boolean;
    /**
     * An optional CSS class name for the secant
     * line container.
     */
    class?: string;
};

export declare function Sequence({ data, r, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, start, end, tickSep, removeEndTicks, removeEndTickX, removeEndTickY, renderLolly, }: SequenceProps): JSX.Element;

/**
 * @public
 */
export declare type SequenceData = number[][] | SequenceFunction[] | Function;

/**
 * @public
 */
export declare type SequenceFunction = {
    f: Function;
    className?: string;
    start?: number;
    end?: number;
};

/**
 * @public
 */
export declare interface SequenceProps extends BaseProps {
    data: SequenceData;
    /**
     * Sets the radius for the circles representing the
     * plot points.
     */
    r?: number;
    /**
     * Sets the start index for the sequence.
     * I.e., the sequence's lower bound for n.
     * By default, 5.
     */
    start?: number;
    /**
     * Sets the terminating index for the sequence.
     * I.e., the sequence's upper bound for n.
     * By default, 0.
     */
    end?: number;
    /**
     * If true, removes the end ticks on both the
     * x-axis and y-axis.
     * Otherwise, the end ticks are left on both axes.
     * The default value is false.
     * By default, 20.
     */
    removeEndTicks?: boolean;
    /**
     * If true, removes the end ticks on the x-axis.
     * Otherwise, the end ticks are left on the x-axis.
     * The default value is `removeEndTicks`.
     */
    removeEndTickX?: boolean;
    /**
     * If true, removes the end ticks on the y-axis,
     * Otherwise the end ticks are left on the y-axis.
     * The default value is `removeEndTicks`.
     */
    removeEndTickY?: boolean;
    /**
     * If true, renders a line connecting
     * a circle plot point to its corresponding
     * index (this can help the plot's readability).
     * Otherwise, no such line is rendered.
     * The default value is `true`.
     */
    renderLolly?: boolean;
    /**
     * The amount of seperation between each
     * tick along the axes.
     */
    tickSep?: number;
}

export declare function SetClassName(userInputClass: string | undefined, defaultClass: string): string;

export declare function SetConditionalValue(property: any, value_if_property_is_set: any, value_if_property_is_not_set: any): any;

export declare function shouldHide(d: any): "block" | "none";

export declare const Stack: ({ data, className, id, fheight, fwidth, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: StackProps) => JSX.Element;

/**
 * @public
 */
export declare type StackData = (Frame | string | number)[];

export declare function StackPlot({ data, axisGroups, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: StackPlotProps): JSX.Element;

/**
 * @public
 */
export declare type StackPlotData = string[][] | number[] | NamedPoint[];

/**
 * @public StackPlotProps
 * The `<StackPlot/>` component's
 * interface.
 */
export declare interface StackPlotProps extends BaseProps {
    /**
     * An array of stack frames.
     */
    data: StackPlotData;
    /**
     * An optional class name to
     * target the diagram.
     */
    className?: string;
    /**
     * An array of axis labels.
     */
    axisGroups?: (string | number)[];
}

/**
 * @public
 */
export declare interface StackProps extends BaseProps {
    data: StackData;
    scale?: number;
    fwidth?: number;
    fheight?: number;
}

/**
 * @public StartPoint
 * The starting point of the path
 */
export declare type StartPoint = {
    M: Point;
};

export declare function StaticArray({ data, reverseIndex, startIndex, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: StaticArrayProps): JSX.Element;

/**
 * @public
 */
export declare interface StaticArrayProps extends BaseProps {
    data: ArrayData;
    pointers: DatumPointerArray;
    reverseIndex?: boolean;
    startIndex?: number;
}

export declare function StructGuard(callback: Function, properties: string[]): (x: any) => boolean;

export declare function Sum({ data, className, id, width, height, scale, cwidth, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, start, end, tickSep, removeEndTicks, removeEndTickX, removeEndTickY, }: SumProps): JSX.Element;

export declare interface SumProps extends BaseProps {
    data: Function | FunctionDatum[] | NamedPoint[];
    start?: number;
    end?: number;
    tickSep?: number;
    removeEndTicks?: boolean;
    removeEndTickX?: boolean;
    removeEndTickY?: boolean;
}

export declare function Surface({ className, width, height, scale, cwidth, domain, range, xTicks, yTicks, cheight, marginTop, marginRight, marginBottom, marginLeft, margins, }: SurfaceProps): JSX.Element;

declare interface SurfaceProps extends BaseProps {
    domain: [number, number];
    range: [number, number];
    xTicks: number;
    yTicks: number;
    pitch: number;
    yaw: number;
    roll: number;
}

export declare const svg: (_width: number, _height: number, _margins: number[]) => {
    width: number;
    height: number;
};

export declare type Tabular = (string | number)[][] | (string | number)[];

export declare interface TexMatrixProps {
    data: LiteralMatrix;
    linespace?: number;
    name?: string;
    children?: ReactElement[];
}

declare function Text_2({ val, fontSize, color, pos, dx, dy, width, height, fitContent, textAlign, latex, anchor, block, }: TextProps): JSX.Element;
export { Text_2 as Text }

export declare type TextDatum = {
    t: string;
    color?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    fontsize?: number;
};

/**
 * @public
 * Used to set the `anchor` attribute.
 */
/**
 * @public TextProps
 * An API for working with the `SVGText`
 * element.
 */
export declare interface TextProps {
    /**
     * Sets the contents of
     * the `<Text/>` element.
     */
    val: number | string | boolean;
    /**
     * Sets the fontsize of the
     * the `<Text/>` element.
     * Measured in REM.
     */
    fontSize?: number;
    /**
     * Sets the color of the
     * `<Text/>` element.
     */
    color?: string;
    /**
     * Sets the position of the
     * the `<Text/>` element. Takes the form
     * `{x: <number>, y: <number>}`. The `x` property
     * sets the `SVGText` elemnent's `x` attribute, and the
     * `y` property sets the `SVGText` element's `y` attribute.
     */
    pos?: Coordinate;
    /**
     * Sets the x-offset of the `SVGText` element.
     */
    dx?: number;
    /**
     * Sets the y-offset of the `SVGText` element.
     */
    dy?: number;
    /**
     * Sets the `textAnchor` attribute of the `SVGText`
     * element.
     */
    width?: number;
    height?: number;
    fitContent?: boolean;
    textAlign?: 'center' | 'justify' | 'left' | 'right';
    anchor?: 'start' | 'middle' | 'end';
    latex?: boolean;
    block?: boolean;
}

export declare function ToBinary(val: number, bits?: number): string;

export declare function ToHex(val: number, bits?: number): string;

export declare function Translate(x: number, y: number): string;

export declare function Transpose({ children }: {
    children: any;
}): JSX.Element;

export declare function Tree({ data, nodes, id, nodeFontSize, nodeRadius, width, height, scale, slim, cwidth, cheight, marginTop, marginBottom, marginRight, marginLeft, margins, edgeLength, markLevels, markDepth, markHeight, markHeightBF, heightStartsAt, }: TreeProps): JSX.Element;

/**
 * All `<Tree/>` components consist of TreeNodes.
 * Each TreeNode maps to a`<g/>`, and is either a
 * child, parent, or both.
 */
/**
 * @public
 */
export declare interface TreeNode {
    child: string | number | boolean;
    parent: string | number | boolean;
    /**
     * Optional - Sets whether the tree node is visible.
     */
    hide?: boolean;
    /**
     * Optional - The value initializing the class attribute
     * for the <g/> created for the TreeNode.
     */
    className?: string;
    id?: string;
    pid?: string;
    type?: string;
}

/**
 * @public
 */
export declare interface TreeProps extends BaseProps {
    data: TreeNode[] | [Literal, Literal][] | BinaryTreeNode;
    nodes?: TreeNode[];
    nodeFontSize?: number;
    nodeRadius?: number;
    slim?: number;
    edgeLength?: number;
    markHeight?: boolean;
    markDepth?: boolean;
    markLevels?: boolean;
    markHeightBF?: boolean;
    heightStartsAt?: number;
}

export declare type TupleXY = [number, number];

export declare type VectorFunctionDatum = {
    vx: Function;
    vy: Function;
    m?: Function;
    s?: number;
    maxMagnitude?: number;
    scale?: number;
    color?: string;
    integrate?: [number, number, Integral];
    integrationColor?: string;
    id?: string;
};

export declare type VerticalLineTo = {
    V: Point;
};

export { }
