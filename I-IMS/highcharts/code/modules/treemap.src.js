/**
 * @license Highcharts JS v9.3.3 (2022-02-01)
 *
 * (c) 2014-2021 Highsoft AS
 * Authors: Jon Arild Nygard / Oystein Moseng
 *
 * License: www.highcharts.com/license
 */
'use strict';
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/modules/treemap', ['highcharts'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);
        }
    }
    _registerModule(_modules, 'Series/ColorMapMixin.js', [_modules['Core/Globals.js'], _modules['Core/Series/Point.js'], _modules['Core/Utilities.js']], function (H, Point, U) {
        /* *
         *
         *  (c) 2010-2021 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        // @todo cleanup & reduction - consider composition
        var noop = H.noop,
            seriesTypes = H.seriesTypes;
        var defined = U.defined,
            addEvent = U.addEvent;
        // Move points to the top of the z-index order when hovered
        addEvent(Point, 'afterSetState', function (e) {
            var point = this;
            if (point.moveToTopOnHover && point.graphic) {
                point.graphic.attr({
                    zIndex: e && e.state === 'hover' ? 1 : 0
                });
            }
        });
        /**
         * Mixin for maps and heatmaps
         *
         * @private
         * @mixin Highcharts.colorMapPointMixin
         */
        var PointMixin = {
                dataLabelOnNull: true,
                moveToTopOnHover: true,
                /* eslint-disable valid-jsdoc */
                /**
                 * Color points have a value option that determines whether or not it is
                 * a null point
                 * @private
                 */
                isValid: function () {
                    // undefined is allowed
                    return (this.value !== null &&
                        this.value !== Infinity &&
                        this.value !== -Infinity);
            }
            /* eslint-enable valid-jsdoc */
        };
        /**
         * @private
         * @mixin Highcharts.colorMapSeriesMixin
         */
        var SeriesMixin = {
                pointArrayMap: ['value'],
                axisTypes: ['xAxis', 'yAxis', 'colorAxis'],
                trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
                getSymbol: noop,
                parallelArrays: ['x', 'y', 'value'],
                colorKey: 'value',
                pointAttribs: seriesTypes.column.prototype.pointAttribs,
                /* eslint-disable valid-jsdoc */
                /**
                 * Get the color attibutes to apply on the graphic
                 * @private
                 * @function Highcharts.colorMapSeriesMixin.colorAttribs
                 * @param {Highcharts.Point} point
                 * @return {Highcharts.SVGAttributes}
                 *         The SVG attributes
                 */
                colorAttribs: function (point) {
                    var ret = {};
                if (defined(point.color) &&
                    (!point.state || point.state === 'normal') // #15746
                ) {
                    ret[this.colorProp || 'fill'] = point.color;
                }
                return ret;
            }
        };
        var ColorMapMixin = {
                PointMixin: PointMixin,
                SeriesMixin: SeriesMixin
            };

        return ColorMapMixin;
    });
    _registerModule(_modules, 'Series/Treemap/TreemapAlgorithmGroup.js', [], function () {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        /* *
         *
         *  Class
         *
         * */
        var TreemapAlgorithmGroup = /** @class */ (function () {
                /* *
                 *
                 *  Constructor
                 *
                 * */
                function TreemapAlgorithmGroup(h, w, d, p) {
                    this.height = h;
                this.width = w;
                this.plot = p;
                this.direction = d;
                this.startDirection = d;
                this.total = 0;
                this.nW = 0;
                this.lW = 0;
                this.nH = 0;
                this.lH = 0;
                this.elArr = [];
                this.lP = {
                    total: 0,
                    lH: 0,
                    nH: 0,
                    lW: 0,
                    nW: 0,
                    nR: 0,
                    lR: 0,
                    aspectRatio: function (w, h) {
                        return Math.max((w / h), (h / w));
                    }
                };
            }
            /* *
             *
             *  Functions
             *
             * */
            /* eslint-disable valid-jsdoc */
            TreemapAlgorithmGroup.prototype.addElement = function (el) {
                this.lP.total = this.elArr[this.elArr.length - 1];
                this.total = this.total + el;
                if (this.direction === 0) {
                    // Calculate last point old aspect ratio
                    this.lW = this.nW;
                    this.lP.lH = this.lP.total / this.lW;
                    this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH);
                    // Calculate last point new aspect ratio
                    this.nW = this.total / this.height;
                    this.lP.nH = this.lP.total / this.nW;
                    this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH);
                }
                else {
                    // Calculate last point old aspect ratio
                    this.lH = this.nH;
                    this.lP.lW = this.lP.total / this.lH;
                    this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH);
                    // Calculate last point new aspect ratio
                    this.nH = this.total / this.width;
                    this.lP.nW = this.lP.total / this.nH;
                    this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH);
                }
                this.elArr.push(el);
            };
            TreemapAlgorithmGroup.prototype.reset = function () {
                this.nW = 0;
                this.lW = 0;
                this.elArr = [];
                this.total = 0;
            };
            return TreemapAlgorithmGroup;
        }());
        /* *
         *
         *  Default Export
         *
         * */

        return TreemapAlgorithmGroup;
    });
    _registerModule(_modules, 'Series/DrawPointComposition.js', [], function () {
        /* *
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        /* *
         *
         *  Composition
         *
         * */
        var DrawPointComposition;
        (function (DrawPointComposition) {
            /* *
             *
             *  Declarations
             *
             * */
            /* *
             *
             *  Constants
             *
             * */
            var composedClasses = [];
            /* *
             *
             *  Functions
             *
             * */
            /* eslint-disable valid-jsdoc */
            /**
             * @private
             */
            function compose(PointClass) {
                if (composedClasses.indexOf(PointClass) === -1) {
                    composedClasses.push(PointClass);
                    var pointProto = PointClass.prototype;
                    pointProto.draw = draw;
                    if (!pointProto.shouldDraw) {
                        pointProto.shouldDraw = shouldDraw;
                    }
                }
                return PointClass;
            }
            DrawPointComposition.compose = compose;
            /**
             * Handles the drawing of a component.
             * Can be used for any type of component that reserves the graphic property,
             * and provides a shouldDraw on its context.
             *
             * @private
             *
             * @todo add type checking.
             * @todo export this function to enable usage
             */
            function draw(params) {
                var _this = this;
                var animatableAttribs = params.animatableAttribs,
                    onComplete = params.onComplete,
                    css = params.css,
                    renderer = params.renderer;
                var animation = (this.series && this.series.chart.hasRendered) ?
                        // Chart-level animation on updates
                        void 0 :
                        // Series-level animation on new points
                        (this.series &&
                            this.series.options.animation);
                var graphic = this.graphic;
                params.attribs = params.attribs || {};
                // Assigning class in dot notation does go well in IE8
                // eslint-disable-next-line dot-notation
                params.attribs['class'] = this.getClassName();
                if (this.shouldDraw()) {
                    if (!graphic) {
                        this.graphic = graphic =
                            renderer[params.shapeType](params.shapeArgs)
                                .add(params.group);
                    }
                    graphic
                        .css(css)
                        .attr(params.attribs)
                        .animate(animatableAttribs, params.isNew ? false : animation, onComplete);
                }
                else if (graphic) {
                    var destroy_1 = function () {
                            _this.graphic = graphic = (graphic && graphic.destroy());
                        if (typeof onComplete === 'function') {
                            onComplete();
                        }
                    };
                    // animate only runs complete callback if something was animated.
                    if (Object.keys(animatableAttribs).length) {
                        graphic.animate(animatableAttribs, void 0, function () {
                            destroy_1();
                        });
                    }
                    else {
                        destroy_1();
                    }
                }
            }
            /**
             * @private
             */
            function shouldDraw() {
                return !this.isNull;
            }
        })(DrawPointComposition || (DrawPointComposition = {}));
        /* *
         *
         *  Default Export
         *
         * */

        return DrawPointComposition;
    });
    _registerModule(_modules, 'Series/Treemap/TreemapPoint.js', [_modules['Series/DrawPointComposition.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Core/Utilities.js']], function (DrawPointComposition, SeriesRegistry, U) {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d,
            b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d,
            b) { d.__proto__ = b; }) ||
                        function (d,
            b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var Point = SeriesRegistry.series.prototype.pointClass,
            _a = SeriesRegistry.seriesTypes,
            PiePoint = _a.pie.prototype.pointClass,
            ScatterPoint = _a.scatter.prototype.pointClass;
        var extend = U.extend,
            isNumber = U.isNumber,
            pick = U.pick;
        /* *
         *
         *  Class
         *
         * */
        var TreemapPoint = /** @class */ (function (_super) {
                __extends(TreemapPoint, _super);
            function TreemapPoint() {
                /* *
                 *
                 *  Properties
                 *
                 * */
                var _this = _super !== null && _super.apply(this,
                    arguments) || this;
                _this.name = void 0;
                _this.node = void 0;
                _this.options = void 0;
                _this.series = void 0;
                _this.value = void 0;
                return _this;
                /* eslint-enable valid-jsdoc */
            }
            /* *
             *
             *  Functions
             *
             * */
            /* eslint-disable valid-jsdoc */
            TreemapPoint.prototype.getClassName = function () {
                var className = Point.prototype.getClassName.call(this),
                    series = this.series,
                    options = series.options;
                // Above the current level
                if (this.node.level <= series.nodeMap[series.rootNode].level) {
                    className += ' highcharts-above-level';
                }
                else if (!this.node.isLeaf &&
                    !pick(options.interactByLeaf, !options.allowTraversingTree)) {
                    className += ' highcharts-internal-node-interactive';
                }
                else if (!this.node.isLeaf) {
                    className += ' highcharts-internal-node';
                }
                return className;
            };
            /**
             * A tree point is valid if it has han id too, assume it may be a parent
             * item.
             *
             * @private
             * @function Highcharts.Point#isValid
             */
            TreemapPoint.prototype.isValid = function () {
                return Boolean(this.id || isNumber(this.value));
            };
            TreemapPoint.prototype.setState = function (state) {
                Point.prototype.setState.call(this, state);
                // Graphic does not exist when point is not visible.
                if (this.graphic) {
                    this.graphic.attr({
                        zIndex: state === 'hover' ? 1 : 0
                    });
                }
            };
            TreemapPoint.prototype.shouldDraw = function () {
                return isNumber(this.plotY) && this.y !== null;
            };
            return TreemapPoint;
        }(ScatterPoint));
        extend(TreemapPoint.prototype, {
            setVisible: PiePoint.prototype.setVisible
        });
        DrawPointComposition.compose(TreemapPoint);
        /* *
         *
         *  Default Export
         *
         * */

        return TreemapPoint;
    });
    _registerModule(_modules, 'Series/Treemap/TreemapUtilities.js', [_modules['Core/Utilities.js']], function (U) {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        /* *
         *
         *  Imports
         *
         * */
        var objectEach = U.objectEach;
        /* *
         *
         *  Namespace
         *
         * */
        var TreemapUtilities;
        (function (TreemapUtilities) {
            TreemapUtilities.AXIS_MAX = 100;
            /* eslint-disable no-invalid-this, valid-jsdoc */
            /**
             * @todo Similar to eachObject, this function is likely redundant
             */
            function isBoolean(x) {
                return typeof x === 'boolean';
            }
            TreemapUtilities.isBoolean = isBoolean;
            /**
             * @todo Similar to recursive, this function is likely redundant
             */
            function eachObject(list, func, context) {
                context = context || this;
                objectEach(list, function (val, key) {
                    func.call(context, val, key, list);
                });
            }
            TreemapUtilities.eachObject = eachObject;
            /**
             * @todo find correct name for this function.
             * @todo Similar to reduce, this function is likely redundant
             */
            function recursive(item, func, context) {
                if (context === void 0) { context = this; }
                var next;
                next = func.call(context, item);
                if (next !== false) {
                    recursive(next, func, context);
                }
            }
            TreemapUtilities.recursive = recursive;
        })(TreemapUtilities || (TreemapUtilities = {}));
        /* *
         *
         *  Default Export
         *
         * */

        return TreemapUtilities;
    });
    _registerModule(_modules, 'Series/TreeUtilities.js', [_modules['Core/Color/Color.js'], _modules['Core/Utilities.js']], function (Color, U) {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var extend = U.extend,
            isArray = U.isArray,
            isNumber = U.isNumber,
            isObject = U.isObject,
            merge = U.merge,
            pick = U.pick;
        /* *
         *
         *  Functions
         *
         * */
        /* eslint-disable valid-jsdoc */
        /**
         * @private
         */
        function getColor(node, options) {
            var index = options.index,
                mapOptionsToLevel = options.mapOptionsToLevel,
                parentColor = options.parentColor,
                parentColorIndex = options.parentColorIndex,
                series = options.series,
                colors = options.colors,
                siblings = options.siblings,
                points = series.points,
                chartOptionsChart = series.chart.options.chart;
            var getColorByPoint,
                point,
                level,
                colorByPoint,
                colorIndexByPoint,
                color,
                colorIndex;
            /**
             * @private
             */
            var variateColor = function (color) {
                    var colorVariation = level && level.colorVariation;
                if (colorVariation &&
                    colorVariation.key === 'brightness' &&
                    index &&
                    siblings) {
                    return Color.parse(color).brighten(colorVariation.to * (index / siblings)).get();
                }
                return color;
            };
            if (node) {
                point = points[node.i];
                level = mapOptionsToLevel[node.level] || {};
                getColorByPoint = point && level.colorByPoint;
                if (getColorByPoint) {
                    colorIndexByPoint = point.index % (colors ?
                        colors.length :
                        chartOptionsChart.colorCount);
                    colorByPoint = colors && colors[colorIndexByPoint];
                }
                // Select either point color, level color or inherited color.
                if (!series.chart.styledMode) {
                    color = pick(point && point.options.color, level && level.color, colorByPoint, parentColor && variateColor(parentColor), series.color);
                }
                colorIndex = pick(point && point.options.colorIndex, level && level.colorIndex, colorIndexByPoint, parentColorIndex, options.colorIndex);
            }
            return {
                color: color,
                colorIndex: colorIndex
            };
        }
        /**
         * Creates a map from level number to its given options.
         *
         * @private
         *
         * @param {Object} params
         * Object containing parameters.
         * - `defaults` Object containing default options. The default options are
         *   merged with the userOptions to get the final options for a specific
         *   level.
         * - `from` The lowest level number.
         * - `levels` User options from series.levels.
         * - `to` The highest level number.
         *
         * @return {Highcharts.Dictionary<object>|null}
         * Returns a map from level number to its given options.
         */
        function getLevelOptions(params) {
            var result = null,
                defaults,
                converted,
                i,
                from,
                to,
                levels;
            if (isObject(params)) {
                result = {};
                from = isNumber(params.from) ? params.from : 1;
                levels = params.levels;
                converted = {};
                defaults = isObject(params.defaults) ? params.defaults : {};
                if (isArray(levels)) {
                    converted = levels.reduce(function (obj, item) {
                        var level,
                            levelIsConstant,
                            options;
                        if (isObject(item) && isNumber(item.level)) {
                            options = merge({}, item);
                            levelIsConstant = pick(options.levelIsConstant, defaults.levelIsConstant);
                            // Delete redundant properties.
                            delete options.levelIsConstant;
                            delete options.level;
                            // Calculate which level these options apply to.
                            level = item.level + (levelIsConstant ? 0 : from - 1);
                            if (isObject(obj[level])) {
                                merge(true, obj[level], options); // #16329
                            }
                            else {
                                obj[level] = options;
                            }
                        }
                        return obj;
                    }, {});
                }
                to = isNumber(params.to) ? params.to : 1;
                for (i = 0; i <= to; i++) {
                    result[i] = merge({}, defaults, isObject(converted[i]) ? converted[i] : {});
                }
            }
            return result;
        }
        /**
         * @private
         * @todo Combine buildTree and buildNode with setTreeValues
         * @todo Remove logic from Treemap and make it utilize this mixin.
         */
        function setTreeValues(tree, options) {
            var before = options.before,
                idRoot = options.idRoot,
                mapIdToNode = options.mapIdToNode,
                nodeRoot = mapIdToNode[idRoot],
                levelIsConstant = (options.levelIsConstant !== false),
                points = options.points,
                point = points[tree.i],
                optionsPoint = point && point.options || {},
                children = [];
            var childrenTotal = 0;
            tree.levelDynamic = tree.level - (levelIsConstant ? 0 : nodeRoot.level);
            tree.name = pick(point && point.name, '');
            tree.visible = (idRoot === tree.id ||
                options.visible === true);
            if (typeof before === 'function') {
                tree = before(tree, options);
            }
            // First give the children some values
            tree.children.forEach(function (child, i) {
                var newOptions = extend({},
                    options);
                extend(newOptions, {
                    index: i,
                    siblings: tree.children.length,
                    visible: tree.visible
                });
                child = setTreeValues(child, newOptions);
                children.push(child);
                if (child.visible) {
                    childrenTotal += child.val;
                }
            });
            // Set the values
            var value = pick(optionsPoint.value,
                childrenTotal);
            tree.visible = value >= 0 && (childrenTotal > 0 || tree.visible);
            tree.children = children;
            tree.childrenTotal = childrenTotal;
            tree.isLeaf = tree.visible && !childrenTotal;
            tree.val = value;
            return tree;
        }
        /**
         * Update the rootId property on the series. Also makes sure that it is
         * accessible to exporting.
         *
         * @private
         *
         * @param {Object} series
         * The series to operate on.
         *
         * @return {string}
         * Returns the resulting rootId after update.
         */
        function updateRootId(series) {
            var rootId,
                options;
            if (isObject(series)) {
                // Get the series options.
                options = isObject(series.options) ? series.options : {};
                // Calculate the rootId.
                rootId = pick(series.rootNode, options.rootId, '');
                // Set rootId on series.userOptions to pick it up in exporting.
                if (isObject(series.userOptions)) {
                    series.userOptions.rootId = rootId;
                }
                // Set rootId on series to pick it up on next update.
                series.rootNode = rootId;
            }
            return rootId;
        }
        /* *
         *
         *  Default Export
         *
         * */
        var TreeUtilities = {
                getColor: getColor,
                getLevelOptions: getLevelOptions,
                setTreeValues: setTreeValues,
                updateRootId: updateRootId
            };

        return TreeUtilities;
    });
    _registerModule(_modules, 'Series/Treemap/TreemapComposition.js', [_modules['Core/Series/SeriesRegistry.js'], _modules['Series/Treemap/TreemapUtilities.js'], _modules['Core/Utilities.js']], function (SeriesRegistry, TreemapUtilities, U) {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        /* *
         *
         *  Imports
         *
         * */
        var Series = SeriesRegistry.series;
        var addEvent = U.addEvent,
            extend = U.extend;
        /* *
         *
         *  Composition
         *
         * */
        var treemapAxisDefaultValues = false;
        addEvent(Series, 'afterBindAxes', function () {
            // eslint-disable-next-line no-invalid-this
            var series = this,
                xAxis = series.xAxis,
                yAxis = series.yAxis,
                treeAxis;
            if (xAxis && yAxis) {
                if (series.is('treemap')) {
                    treeAxis = {
                        endOnTick: false,
                        gridLineWidth: 0,
                        lineWidth: 0,
                        min: 0,
                        // dataMin: 0,
                        minPadding: 0,
                        max: TreemapUtilities.AXIS_MAX,
                        // dataMax: TreemapUtilities.AXIS_MAX,
                        maxPadding: 0,
                        startOnTick: false,
                        title: void 0,
                        tickPositions: []
                    };
                    extend(yAxis.options, treeAxis);
                    extend(xAxis.options, treeAxis);
                    treemapAxisDefaultValues = true;
                }
                else if (treemapAxisDefaultValues) {
                    yAxis.setOptions(yAxis.userOptions);
                    xAxis.setOptions(xAxis.userOptions);
                    treemapAxisDefaultValues = false;
                }
            }
        });

    });
    _registerModule(_modules, 'Series/Treemap/TreemapSeries.js', [_modules['Core/Color/Color.js'], _modules['Series/ColorMapMixin.js'], _modules['Core/Globals.js'], _modules['Core/Legend/LegendSymbol.js'], _modules['Core/Series/SeriesRegistry.js'], _modules['Series/Treemap/TreemapAlgorithmGroup.js'], _modules['Series/Treemap/TreemapPoint.js'], _modules['Series/Treemap/TreemapUtilities.js'], _modules['Series/TreeUtilities.js'], _modules['Core/Utilities.js']], function (Color, ColorMapMixin, H, LegendSymbol, SeriesRegistry, TreemapAlgorithmGroup, TreemapPoint, TreemapUtilities, TU, U) {
        /* *
         *
         *  (c) 2014-2021 Highsoft AS
         *
         *  Authors: Jon Arild Nygard / Oystein Moseng
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var __extends = (this && this.__extends) || (function () {
                var extendStatics = function (d,
            b) {
                    extendStatics = Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array && function (d,
            b) { d.__proto__ = b; }) ||
                        function (d,
            b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var color = Color.parse;
        var noop = H.noop;
        var Series = SeriesRegistry.series,
            _a = SeriesRegistry.seriesTypes,
            ColumnSeries = _a.column,
            HeatmapSeries = _a.heatmap,
            ScatterSeries = _a.scatter;
        var getColor = TU.getColor,
            getLevelOptions = TU.getLevelOptions,
            updateRootId = TU.updateRootId;
        var addEvent = U.addEvent,
            correctFloat = U.correctFloat,
            defined = U.defined,
            error = U.error,
            extend = U.extend,
            fireEvent = U.fireEvent,
            isArray = U.isArray,
            isObject = U.isObject,
            isString = U.isString,
            merge = U.merge,
            pick = U.pick,
            stableSort = U.stableSort;
        /* *
         *
         *  Class
         *
         * */
        /**
         * @private
         * @class
         * @name Highcharts.seriesTypes.treemap
         *
         * @augments Highcharts.Series
         */
        var TreemapSeries = /** @class */ (function (_super) {
                __extends(TreemapSeries, _super);
            function TreemapSeries() {
                /* *
                 *
                 *  Static Properties
                 *
                 * */
                var _this = _super !== null && _super.apply(this,
                    arguments) || this;
                /* *
                 *
                 *  Properties
                 *
                 * */
                _this.axisRatio = void 0;
                _this.data = void 0;
                _this.mapOptionsToLevel = void 0;
                _this.nodeMap = void 0;
                _this.options = void 0;
                _this.points = void 0;
                _this.rootNode = void 0;
                _this.tree = void 0;
                return _this;
                /* eslint-enable valid-jsdoc */
            }
            /* *
             *
             *  Function
             *
             * */
            /* eslint-disable valid-jsdoc */
            TreemapSeries.prototype.algorithmCalcPoints = function (directionChange, last, group, childrenArea) {
                var pX,
                    pY,
                    pW,
                    pH,
                    gW = group.lW,
                    gH = group.lH,
                    plot = group.plot,
                    keep,
                    i = 0,
                    end = group.elArr.length - 1;
                if (last) {
                    gW = group.nW;
                    gH = group.nH;
                }
                else {
                    keep = group.elArr[group.elArr.length - 1];
                }
                group.elArr.forEach(function (p) {
                    if (last || (i < end)) {
                        if (group.direction === 0) {
                            pX = plot.x;
                            pY = plot.y;
                            pW = gW;
                            pH = p / pW;
                        }
                        else {
                            pX = plot.x;
                            pY = plot.y;
                            pH = gH;
                            pW = p / pH;
                        }
                        childrenArea.push({
                            x: pX,
                            y: pY,
                            width: pW,
                            height: correctFloat(pH)
                        });
                        if (group.direction === 0) {
                            plot.y = plot.y + pH;
                        }
                        else {
                            plot.x = plot.x + pW;
                        }
                    }
                    i = i + 1;
                });
                // Reset variables
                group.reset();
                if (group.direction === 0) {
                    group.width = group.width - gW;
                }
                else {
                    group.height = group.height - gH;
                }
                plot.y = plot.parent.y + (plot.parent.height - group.height);
                plot.x = plot.parent.x + (plot.parent.width - group.width);
                if (directionChange) {
                    group.direction = 1 - group.direction;
                }
                // If not last, then add uncalculated element
                if (!last) {
                    group.addElement(keep);
                }
            };
            TreemapSeries.prototype.algorithmFill = function (directionChange, parent, children) {
                var childrenArea = [],
                    pTot,
                    direction = parent.direction,
                    x = parent.x,
                    y = parent.y,
                    width = parent.width,
                    height = parent.height,
                    pX,
                    pY,
                    pW,
                    pH;
                children.forEach(function (child) {
                    pTot =
                        (parent.width * parent.height) * (child.val / parent.val);
                    pX = x;
                    pY = y;
                    if (direction === 0) {
                        pH = height;
                        pW = pTot / pH;
                        width = width - pW;
                        x = x + pW;
                    }
                    else {
                        pW = width;
                        pH = pTot / pW;
                        height = height - pH;
                        y = y + pH;
                    }
                    childrenArea.push({
                        x: pX,
                        y: pY,
                        width: pW,
                        height: pH
                    });
                    if (directionChange) {
                        direction = 1 - direction;
                    }
                });
                return childrenArea;
            };
            TreemapSeries.prototype.algorithmLowAspectRatio = function (directionChange, parent, children) {
                var childrenArea = [],
                    series = this,
                    pTot,
                    plot = {
                        x: parent.x,
                        y: parent.y,
                        parent: parent
                    },
                    direction = parent.direction,
                    i = 0,
                    end = children.length - 1,
                    group = new TreemapAlgorithmGroup(parent.height,
                    parent.width,
                    direction,
                    plot);
                // Loop through and calculate all areas
                children.forEach(function (child) {
                    pTot =
                        (parent.width * parent.height) * (child.val / parent.val);
                    group.addElement(pTot);
                    if (group.lP.nR > group.lP.lR) {
                        series.algorithmCalcPoints(directionChange, false, group, childrenArea, plot // @todo no supported
                        );
                    }
                    // If last child, then calculate all remaining areas
                    if (i === end) {
                        series.algorithmCalcPoints(directionChange, true, group, childrenArea, plot // @todo not supported
                        );
                    }
                    i = i + 1;
                });
                return childrenArea;
            };
            /**
             * Over the alignment method by setting z index.
             * @private
             */
            TreemapSeries.prototype.alignDataLabel = function (point, dataLabel, labelOptions) {
                var style = labelOptions.style;
                // #8160: Prevent the label from exceeding the point's
                // boundaries in treemaps by applying ellipsis overflow.
                // The issue was happening when datalabel's text contained a
                // long sequence of characters without a whitespace.
                if (style &&
                    !defined(style.textOverflow) &&
                    dataLabel.text &&
                    dataLabel.getBBox().width > dataLabel.text.textWidth) {
                    dataLabel.css({
                        textOverflow: 'ellipsis',
                        // unit (px) is required when useHTML is true
                        width: style.width += 'px'
                    });
                }
                ColumnSeries.prototype.alignDataLabel.apply(this, arguments);
                if (point.dataLabel) {
                    // point.node.zIndex could be undefined (#6956)
                    point.dataLabel.attr({ zIndex: (point.node.zIndex || 0) + 1 });
                }
            };
            TreemapSeries.prototype.buildNode = function (id, i, level, list, parent) {
                var series = this,
                    children = [],
                    point = series.points[i],
                    height = 0,
                    node,
                    child;
                // Actions
                ((list[id] || [])).forEach(function (i) {
                    child = series.buildNode(series.points[i].id, i, (level + 1), list, id);
                    height = Math.max(child.height + 1, height);
                    children.push(child);
                });
                node = {
                    id: id,
                    i: i,
                    children: children,
                    height: height,
                    level: level,
                    parent: parent,
                    visible: false // @todo move this to better location
                };
                series.nodeMap[node.id] = node;
                if (point) {
                    point.node = node;
                }
                return node;
            };
            /**
             * Recursive function which calculates the area for all children of a
             * node.
             *
             * @private
             * @function Highcharts.Series#calculateChildrenAreas
             *
             * @param {Object} node
             * The node which is parent to the children.
             *
             * @param {Object} area
             * The rectangular area of the parent.
             */
            TreemapSeries.prototype.calculateChildrenAreas = function (parent, area) {
                var series = this,
                    options = series.options,
                    mapOptionsToLevel = series.mapOptionsToLevel,
                    level = mapOptionsToLevel[parent.level + 1],
                    algorithm = pick((series[(level && level.layoutAlgorithm)] &&
                        level.layoutAlgorithm),
                    options.layoutAlgorithm),
                    alternate = options.alternateStartingDirection,
                    childrenValues = [],
                    children;
                // Collect all children which should be included
                children = parent.children.filter(function (n) {
                    return !n.ignore;
                });
                if (level && level.layoutStartingDirection) {
                    area.direction = level.layoutStartingDirection === 'vertical' ?
                        0 :
                        1;
                }
                childrenValues = series[algorithm](area, children);
                children.forEach(function (child, index) {
                    var values = childrenValues[index];
                    child.values = merge(values, {
                        val: child.childrenTotal,
                        direction: (alternate ? 1 - area.direction : area.direction)
                    });
                    child.pointValues = merge(values, {
                        x: (values.x / series.axisRatio),
                        // Flip y-values to avoid visual regression with csvCoord in
                        // Axis.translate at setPointValues. #12488
                        y: TreemapUtilities.AXIS_MAX - values.y - values.height,
                        width: (values.width / series.axisRatio)
                    });
                    // If node has children, then call method recursively
                    if (child.children.length) {
                        series.calculateChildrenAreas(child, child.values);
                    }
                });
            };
            /**
             * Extend drawDataLabels with logic to handle custom options related to
             * the treemap series:
             *
             * - Points which is not a leaf node, has dataLabels disabled by
             *   default.
             *
             * - Options set on series.levels is merged in.
             *
             * - Width of the dataLabel is set to match the width of the point
             *   shape.
             *
             * @private
             */
            TreemapSeries.prototype.drawDataLabels = function () {
                var series = this,
                    mapOptionsToLevel = series.mapOptionsToLevel,
                    points = series.points.filter(function (n) {
                        return n.node.visible;
                }), options, level;
                points.forEach(function (point) {
                    level = mapOptionsToLevel[point.node.level];
                    // Set options to new object to avoid problems with scope
                    options = { style: {} };
                    // If not a leaf, then label should be disabled as default
                    if (!point.node.isLeaf) {
                        options.enabled = false;
                    }
                    // If options for level exists, include them as well
                    if (level && level.dataLabels) {
                        options = merge(options, level.dataLabels);
                        series._hasPointLabels = true;
                    }
                    // Set dataLabel width to the width of the point shape.
                    if (point.shapeArgs) {
                        options.style.width = point.shapeArgs.width;
                        if (point.dataLabel) {
                            point.dataLabel.css({
                                width: point.shapeArgs.width + 'px'
                            });
                        }
                    }
                    // Merge custom options with point options
                    point.dlOptions = merge(options, point.options.dataLabels);
                });
                Series.prototype.drawDataLabels.call(this);
            };
            /**
             * Override drawPoints
             * @private
             */
            TreemapSeries.prototype.drawPoints = function () {
                var series = this,
                    chart = series.chart,
                    renderer = chart.renderer,
                    points = series.points,
                    styledMode = chart.styledMode,
                    options = series.options,
                    shadow = styledMode ? {} : options.shadow,
                    borderRadius = options.borderRadius,
                    withinAnimationLimit = chart.pointCount < options.animationLimit,
                    allowTraversingTree = options.allowTraversingTree;
                points.forEach(function (point) {
                    var levelDynamic = point.node.levelDynamic,
                        animatableAttribs = {},
                        attribs = {},
                        css = {},
                        groupKey = 'level-group-' + point.node.level,
                        hasGraphic = !!point.graphic,
                        shouldAnimate = withinAnimationLimit && hasGraphic,
                        shapeArgs = point.shapeArgs;
                    // Don't bother with calculate styling if the point is not drawn
                    if (point.shouldDraw()) {
                        point.isInside = true;
                        if (borderRadius) {
                            attribs.r = borderRadius;
                        }
                        merge(true, // Extend object
                        // Which object to extend
                        shouldAnimate ? animatableAttribs : attribs, 
                        // Add shapeArgs to animate/attr if graphic exists
                        hasGraphic ? shapeArgs : {}, 
                        // Add style attribs if !styleMode
                        styledMode ?
                            {} :
                            series.pointAttribs(point, point.selected ? 'select' : void 0));
                        // In styled mode apply point.color. Use CSS, otherwise the
                        // fill used in the style sheet will take precedence over
                        // the fill attribute.
                        if (series.colorAttribs && styledMode) {
                            // Heatmap is loaded
                            extend(css, series.colorAttribs(point));
                        }
                        if (!series[groupKey]) {
                            series[groupKey] = renderer.g(groupKey)
                                .attr({
                                // @todo Set the zIndex based upon the number of
                                // levels, instead of using 1000
                                zIndex: 1000 - (levelDynamic || 0)
                            })
                                .add(series.group);
                            series[groupKey].survive = true;
                        }
                    }
                    // Draw the point
                    point.draw({
                        animatableAttribs: animatableAttribs,
                        attribs: attribs,
                        css: css,
                        group: series[groupKey],
                        renderer: renderer,
                        shadow: shadow,
                        shapeArgs: shapeArgs,
                        shapeType: 'rect'
                    });
                    // If setRootNode is allowed, set a point cursor on clickables &
                    // add drillId to point
                    if (allowTraversingTree && point.graphic) {
                        point.drillId = options.interactByLeaf ?
                            series.drillToByLeaf(point) :
                            series.drillToByGroup(point);
                    }
                });
            };
            /**
             * Finds the drill id for a parent node. Returns false if point should
             * not have a click event.
             * @private
             */
            TreemapSeries.prototype.drillToByGroup = function (point) {
                var series = this,
                    drillId = false;
                if ((point.node.level - series.nodeMap[series.rootNode].level) ===
                    1 &&
                    !point.node.isLeaf) {
                    drillId = point.id;
                }
                return drillId;
            };
            /**
             * Finds the drill id for a leaf node. Returns false if point should not
             * have a click event
             * @private
             */
            TreemapSeries.prototype.drillToByLeaf = function (point) {
                var series = this,
                    drillId = false,
                    nodeParent;
                if ((point.node.parent !== series.rootNode) &&
                    point.node.isLeaf) {
                    nodeParent = point.node;
                    while (!drillId) {
                        nodeParent = series.nodeMap[nodeParent.parent];
                        if (nodeParent.parent === series.rootNode) {
                            drillId = nodeParent.id;
                        }
                    }
                }
                return drillId;
            };
            /**
             * @todo remove this function at a suitable version.
             * @private
             */
            TreemapSeries.prototype.drillToNode = function (id, redraw) {
                error(32, false, void 0, { 'treemap.drillToNode': 'use treemap.setRootNode' });
                this.setRootNode(id, redraw);
            };
            TreemapSeries.prototype.drillUp = function () {
                var series = this,
                    node = series.nodeMap[series.rootNode];
                if (node && isString(node.parent)) {
                    series.setRootNode(node.parent, true, { trigger: 'traverseUpButton' });
                }
            };
            TreemapSeries.prototype.getExtremes = function () {
                // Get the extremes from the value data
                var _a = Series.prototype.getExtremes
                        .call(this,
                    this.colorValueData),
                    dataMin = _a.dataMin,
                    dataMax = _a.dataMax;
                this.valueMin = dataMin;
                this.valueMax = dataMax;
                // Get the extremes from the y data
                return Series.prototype.getExtremes.call(this);
            };
            /**
             * Creates an object map from parent id to childrens index.
             *
             * @private
             * @function Highcharts.Series#getListOfParents
             *
             * @param {Highcharts.SeriesTreemapDataOptions} [data]
             *        List of points set in options.
             *
             * @param {Array<string>} [existingIds]
             *        List of all point ids.
             *
             * @return {Object}
             *         Map from parent id to children index in data.
             */
            TreemapSeries.prototype.getListOfParents = function (data, existingIds) {
                var arr = isArray(data) ? data : [],
                    ids = isArray(existingIds) ? existingIds : [],
                    listOfParents = arr.reduce(function (prev,
                    curr,
                    i) {
                        var parent = pick(curr.parent, '');
                    if (typeof prev[parent] === 'undefined') {
                        prev[parent] = [];
                    }
                    prev[parent].push(i);
                    return prev;
                }, {
                    '': [] // Root of tree
                });
                // If parent does not exist, hoist parent to root of tree.
                TreemapUtilities.eachObject(listOfParents, function (children, parent, list) {
                    if ((parent !== '') && (ids.indexOf(parent) === -1)) {
                        children.forEach(function (child) {
                            list[''].push(child);
                        });
                        delete list[parent];
                    }
                });
                return listOfParents;
            };
            /**
             * Creates a tree structured object from the series points.
             * @private
             */
            TreemapSeries.prototype.getTree = function () {
                var series = this,
                    allIds = this.data.map(function (d) {
                        return d.id;
                }), parentList = series.getListOfParents(this.data, allIds);
                series.nodeMap = {};
                return series.buildNode('', -1, 0, parentList);
            };
            /**
             * Define hasData function for non-cartesian series. Returns true if the
             * series has points at all.
             * @private
             */
            TreemapSeries.prototype.hasData = function () {
                return !!this.processedXData.length; // != 0
            };
            TreemapSeries.prototype.init = function (chart, options) {
                var series = this,
                    setOptionsEvent;
                // If color series logic is loaded, add some properties
                this.colorAttribs = ColorMapMixin.SeriesMixin.colorAttribs;
                setOptionsEvent = addEvent(series, 'setOptions', function (event) {
                    var options = event.userOptions;
                    if (defined(options.allowDrillToNode) &&
                        !defined(options.allowTraversingTree)) {
                        options.allowTraversingTree = options.allowDrillToNode;
                        delete options.allowDrillToNode;
                    }
                    if (defined(options.drillUpButton) &&
                        !defined(options.traverseUpButton)) {
                        options.traverseUpButton = options.drillUpButton;
                        delete options.drillUpButton;
                    }
                });
                Series.prototype.init.call(series, chart, options);
                // Treemap's opacity is a different option from other series
                delete series.opacity;
                // Handle deprecated options.
                series.eventsToUnbind.push(setOptionsEvent);
                if (series.options.allowTraversingTree) {
                    series.eventsToUnbind.push(addEvent(series, 'click', series.onClickDrillToNode));
                }
            };
            /**
             * Add drilling on the suitable points.
             * @private
             */
            TreemapSeries.prototype.onClickDrillToNode = function (event) {
                var series = this,
                    point = event.point,
                    drillId = point && point.drillId;
                // If a drill id is returned, add click event and cursor.
                if (isString(drillId)) {
                    point.setState(''); // Remove hover
                    series.setRootNode(drillId, true, { trigger: 'click' });
                }
            };
            /**
             * Get presentational attributes
             * @private
             */
            TreemapSeries.prototype.pointAttribs = function (point, state) {
                var series = this,
                    mapOptionsToLevel = (isObject(series.mapOptionsToLevel) ?
                        series.mapOptionsToLevel :
                        {}),
                    level = point && mapOptionsToLevel[point.node.level] || {},
                    options = this.options,
                    attr,
                    stateOptions = (state && options.states[state]) || {},
                    className = (point && point.getClassName()) || '',
                    opacity;
                // Set attributes by precedence. Point trumps level trumps series.
                // Stroke width uses pick because it can be 0.
                attr = {
                    'stroke': (point && point.borderColor) ||
                        level.borderColor ||
                        stateOptions.borderColor ||
                        options.borderColor,
                    'stroke-width': pick(point && point.borderWidth, level.borderWidth, stateOptions.borderWidth, options.borderWidth),
                    'dashstyle': (point && point.borderDashStyle) ||
                        level.borderDashStyle ||
                        stateOptions.borderDashStyle ||
                        options.borderDashStyle,
                    'fill': (point && point.color) || this.color
                };
                // Hide levels above the current view
                if (className.indexOf('highcharts-above-level') !== -1) {
                    attr.fill = 'none';
                    attr['stroke-width'] = 0;
                    // Nodes with children that accept interaction
                }
                else if (className.indexOf('highcharts-internal-node-interactive') !== -1) {
                    opacity = pick(stateOptions.opacity, options.opacity);
                    attr.fill = color(attr.fill).setOpacity(opacity).get();
                    attr.cursor = 'pointer';
                    // Hide nodes that have children
                }
                else if (className.indexOf('highcharts-internal-node') !== -1) {
                    attr.fill = 'none';
                }
                else if (state) {
                    // Brighten and hoist the hover nodes
                    attr.fill = color(attr.fill)
                        .brighten(stateOptions.brightness)
                        .get();
                }
                return attr;
            };
            TreemapSeries.prototype.renderTraverseUpButton = function (rootId) {
                var series = this,
                    nodeMap = series.nodeMap,
                    node = nodeMap[rootId],
                    name = node.name,
                    buttonOptions = series.options
                        .traverseUpButton,
                    backText = pick(buttonOptions.text,
                    name, '◁ Back'),
                    attr,
                    states;
                if (rootId === '' || (series.is('sunburst') &&
                    series.tree.children.length === 1 &&
                    rootId === series.tree.children[0].id)) {
                    if (series.drillUpButton) {
                        series.drillUpButton = series.drillUpButton.destroy();
                    }
                }
                else if (!this.drillUpButton) {
                    attr = buttonOptions.theme;
                    states = attr && attr.states;
                    this.drillUpButton = this.chart.renderer
                        .button(backText, 0, 0, function () {
                        series.drillUp();
                    }, attr, states && states.hover, states && states.select)
                        .addClass('highcharts-drillup-button')
                        .attr({
                        align: buttonOptions.position.align,
                        zIndex: 7
                    })
                        .add()
                        .align(buttonOptions.position, false, buttonOptions.relativeTo || 'plotBox');
                }
                else {
                    this.drillUpButton.placed = false;
                    this.drillUpButton.attr({
                        text: backText
                    })
                        .align();
                }
            };
            /**
             * Set the node's color recursively, from the parent down.
             * @private
             */
            TreemapSeries.prototype.setColorRecursive = function (node, parentColor, colorIndex, index, siblings) {
                var series = this,
                    chart = series && series.chart,
                    colors = chart && chart.options && chart.options.colors,
                    colorInfo,
                    point;
                if (node) {
                    colorInfo = getColor(node, {
                        colors: colors,
                        index: index,
                        mapOptionsToLevel: series.mapOptionsToLevel,
                        parentColor: parentColor,
                        parentColorIndex: colorIndex,
                        series: series,
                        siblings: siblings
                    });
                    point = series.points[node.i];
                    if (point) {
                        point.color = colorInfo.color;
                        point.colorIndex = colorInfo.colorIndex;
                    }
                    // Do it all again with the children
                    (node.children || []).forEach(function (child, i) {
                        series.setColorRecursive(child, colorInfo.color, colorInfo.colorIndex, i, node.children.length);
                    });
                }
            };
            TreemapSeries.prototype.setPointValues = function () {
                var series = this;
                var points = series.points,
                    xAxis = series.xAxis,
                    yAxis = series.yAxis;
                var styledMode = series.chart.styledMode;
                // Get the crisp correction in classic mode. For this to work in
                // styled mode, we would need to first add the shape (without x,
                // y, width and height), then read the rendered stroke width
                // using point.graphic.strokeWidth(), then modify and apply the
                // shapeArgs. This applies also to column series, but the
                // downside is performance and code complexity.
                var getCrispCorrection = function (point) { return (styledMode ?
                        0 :
                        ((series.pointAttribs(point)['stroke-width'] || 0) % 2) / 2); };
                points.forEach(function (point) {
                    var _a = point.node,
                        values = _a.pointValues,
                        visible = _a.visible;
                    // Points which is ignored, have no values.
                    if (values && visible) {
                        var height = values.height,
                            width = values.width,
                            x = values.x,
                            y = values.y;
                        var crispCorr = getCrispCorrection(point);
                        var x1 = Math.round(xAxis.toPixels(x,
                            true)) - crispCorr;
                        var x2 = Math.round(xAxis.toPixels(x + width,
                            true)) - crispCorr;
                        var y1 = Math.round(yAxis.toPixels(y,
                            true)) - crispCorr;
                        var y2 = Math.round(yAxis.toPixels(y + height,
                            true)) - crispCorr;
                        // Set point values
                        var shapeArgs = {
                                x: Math.min(x1,
                            x2),
                                y: Math.min(y1,
                            y2),
                                width: Math.abs(x2 - x1),
                                height: Math.abs(y2 - y1)
                            };
                        point.plotX = shapeArgs.x + (shapeArgs.width / 2);
                        point.plotY = shapeArgs.y + (shapeArgs.height / 2);
                        point.shapeArgs = shapeArgs;
                    }
                    else {
                        // Reset visibility
                        delete point.plotX;
                        delete point.plotY;
                    }
                });
            };
            /**
             * Sets a new root node for the series.
             *
             * @private
             * @function Highcharts.Series#setRootNode
             *
             * @param {string} id
             * The id of the new root node.
             *
             * @param {boolean} [redraw=true]
             * Wether to redraw the chart or not.
             *
             * @param {Object} [eventArguments]
             * Arguments to be accessed in event handler.
             *
             * @param {string} [eventArguments.newRootId]
             * Id of the new root.
             *
             * @param {string} [eventArguments.previousRootId]
             * Id of the previous root.
             *
             * @param {boolean} [eventArguments.redraw]
             * Wether to redraw the chart after.
             *
             * @param {Object} [eventArguments.series]
             * The series to update the root of.
             *
             * @param {string} [eventArguments.trigger]
             * The action which triggered the event. Undefined if the setRootNode is
             * called directly.
             *
             * @emits Highcharts.Series#event:setRootNode
             */
            TreemapSeries.prototype.setRootNode = function (id, redraw, eventArguments) {
                var series = this,
                    eventArgs = extend({
                        newRootId: id,
                        previousRootId: series.rootNode,
                        redraw: pick(redraw,
                    true),
                        series: series
                    },
                    eventArguments);
                /**
                 * The default functionality of the setRootNode event.
                 *
                 * @private
                 * @param {Object} args The event arguments.
                 * @param {string} args.newRootId Id of the new root.
                 * @param {string} args.previousRootId Id of the previous root.
                 * @param {boolean} args.redraw Wether to redraw the chart after.
                 * @param {Object} args.series The series to update the root of.
                 * @param {string} [args.trigger=undefined] The action which
                 * triggered the event. Undefined if the setRootNode is called
                 * directly.
                     */
                var defaultFn = function (args) {
                        var series = args.series;
                    // Store previous and new root ids on the series.
                    series.idPreviousRoot = args.previousRootId;
                    series.rootNode = args.newRootId;
                    // Redraw the chart
                    series.isDirty = true; // Force redraw
                    if (args.redraw) {
                        series.chart.redraw();
                    }
                };
                // Fire setRootNode event.
                fireEvent(series, 'setRootNode', eventArgs, defaultFn);
            };
            /**
             * Workaround for `inactive` state. Since `series.opacity` option is
             * already reserved, don't use that state at all by disabling
             * `inactiveOtherPoints` and not inheriting states by points.
             * @private
             */
            TreemapSeries.prototype.setState = function (state) {
                this.options.inactiveOtherPoints = true;
                Series.prototype.setState.call(this, state, false);
                this.options.inactiveOtherPoints = false;
            };
            TreemapSeries.prototype.setTreeValues = function (tree) {
                var series = this,
                    options = series.options,
                    idRoot = series.rootNode,
                    mapIdToNode = series.nodeMap,
                    nodeRoot = mapIdToNode[idRoot],
                    levelIsConstant = (TreemapUtilities.isBoolean(options.levelIsConstant) ?
                        options.levelIsConstant :
                        true),
                    childrenTotal = 0,
                    children = [],
                    val,
                    point = series.points[tree.i];
                // First give the children some values
                tree.children.forEach(function (child) {
                    child = series.setTreeValues(child);
                    children.push(child);
                    if (!child.ignore) {
                        childrenTotal += child.val;
                    }
                });
                // Sort the children
                stableSort(children, function (a, b) {
                    return (a.sortIndex || 0) - (b.sortIndex || 0);
                });
                // Set the values
                val = pick(point && point.options.value, childrenTotal);
                if (point) {
                    point.value = val;
                }
                extend(tree, {
                    children: children,
                    childrenTotal: childrenTotal,
                    // Ignore this node if point is not visible
                    ignore: !(pick(point && point.visible, true) && (val > 0)),
                    isLeaf: tree.visible && !childrenTotal,
                    levelDynamic: (tree.level - (levelIsConstant ? 0 : nodeRoot.level)),
                    name: pick(point && point.name, ''),
                    sortIndex: pick(point && point.sortIndex, -val),
                    val: val
                });
                return tree;
            };
            TreemapSeries.prototype.sliceAndDice = function (parent, children) {
                return this.algorithmFill(true, parent, children);
            };
            TreemapSeries.prototype.squarified = function (parent, children) {
                return this.algorithmLowAspectRatio(true, parent, children);
            };
            TreemapSeries.prototype.strip = function (parent, children) {
                return this.algorithmLowAspectRatio(false, parent, children);
            };
            TreemapSeries.prototype.stripes = function (parent, children) {
                return this.algorithmFill(false, parent, children);
            };
            TreemapSeries.prototype.translate = function () {
                var series = this,
                    options = series.options, 
                    // NOTE: updateRootId modifies series.
                    rootId = updateRootId(series),
                    rootNode,
                    pointValues,
                    seriesArea,
                    tree,
                    val;
                // Call prototype function
                Series.prototype.translate.call(series);
                // @todo Only if series.isDirtyData is true
                tree = series.tree = series.getTree();
                rootNode = series.nodeMap[rootId];
                if (rootId !== '' &&
                    (!rootNode || !rootNode.children.length)) {
                    series.setRootNode('', false);
                    rootId = series.rootNode;
                    rootNode = series.nodeMap[rootId];
                }
                series.renderTraverseUpButton(rootId);
                series.mapOptionsToLevel = getLevelOptions({
                    from: rootNode.level + 1,
                    levels: options.levels,
                    to: tree.height,
                    defaults: {
                        levelIsConstant: series.options.levelIsConstant,
                        colorByPoint: options.colorByPoint
                    }
                });
                // Parents of the root node is by default visible
                TreemapUtilities.recursive(series.nodeMap[series.rootNode], function (node) {
                    var next = false,
                        p = node.parent;
                    node.visible = true;
                    if (p || p === '') {
                        next = series.nodeMap[p];
                    }
                    return next;
                });
                // Children of the root node is by default visible
                TreemapUtilities.recursive(series.nodeMap[series.rootNode].children, function (children) {
                    var next = false;
                    children.forEach(function (child) {
                        child.visible = true;
                        if (child.children.length) {
                            next = (next || []).concat(child.children);
                        }
                    });
                    return next;
                });
                series.setTreeValues(tree);
                // Calculate plotting values.
                series.axisRatio = (series.xAxis.len / series.yAxis.len);
                series.nodeMap[''].pointValues = pointValues = {
                    x: 0,
                    y: 0,
                    width: TreemapUtilities.AXIS_MAX,
                    height: TreemapUtilities.AXIS_MAX
                };
                series.nodeMap[''].values = seriesArea = merge(pointValues, {
                    width: (pointValues.width * series.axisRatio),
                    direction: (options.layoutStartingDirection === 'vertical' ? 0 : 1),
                    val: tree.val
                });
                series.calculateChildrenAreas(tree, seriesArea);
                // Logic for point colors
                if (!series.colorAxis &&
                    !options.colorByPoint) {
                    series.setColorRecursive(series.tree);
                }
                // Update axis extremes according to the root node.
                if (options.allowTraversingTree) {
                    val = rootNode.pointValues;
                    series.xAxis.setExtremes(val.x, val.x + val.width, false);
                    series.yAxis.setExtremes(val.y, val.y + val.height, false);
                    series.xAxis.setScale();
                    series.yAxis.setScale();
                }
                // Assign values to points.
                series.setPointValues();
            };
            /**
             * A treemap displays hierarchical data using nested rectangles. The data
             * can be laid out in varying ways depending on options.
             *
             * @sample highcharts/demo/treemap-large-dataset/
             *         Treemap
             *
             * @extends      plotOptions.scatter
             * @excluding    dragDrop, marker, jitter, dataSorting
             * @product      highcharts
             * @requires     modules/treemap
             * @optionparent plotOptions.treemap
             */
            TreemapSeries.defaultOptions = merge(ScatterSeries.defaultOptions, {
                /**
                 * When enabled the user can click on a point which is a parent and
                 * zoom in on its children. Deprecated and replaced by
                 * [allowTraversingTree](#plotOptions.treemap.allowTraversingTree).
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-allowdrilltonode/
                 *         Enabled
                 *
                 * @deprecated
                 * @type      {boolean}
                 * @default   false
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.allowDrillToNode
                 */
                /**
                 * When enabled the user can click on a point which is a parent and
                 * zoom in on its children.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-allowtraversingtree/
                 *         Enabled
                 *
                 * @since     7.0.3
                 * @product   highcharts
                 */
                allowTraversingTree: false,
                animationLimit: 250,
                /**
                 * The border radius for each treemap item.
                 */
                borderRadius: 0,
                /**
                 * When the series contains less points than the crop threshold, all
                 * points are drawn, event if the points fall outside the visible plot
                 * area at the current zoom. The advantage of drawing all points
                 * (including markers and columns), is that animation is performed on
                 * updates. On the other hand, when the series contains more points than
                 * the crop threshold, the series data is cropped to only contain points
                 * that fall within the plot area. The advantage of cropping away
                 * invisible points is to increase performance on large series.
                 *
                 * @type      {number}
                 * @default   300
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.cropThreshold
                 */
                /**
                 * Fires on a request for change of root node for the tree, before the
                 * update is made. An event object is passed to the function, containing
                 * additional properties `newRootId`, `previousRootId`, `redraw` and
                 * `trigger`.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-events-setrootnode/
                 *         Alert update information on setRootNode event.
                 *
                 * @type {Function}
                 * @default undefined
                 * @since 7.0.3
                 * @product highcharts
                 * @apioption plotOptions.treemap.events.setRootNode
                 */
                /**
                 * This option decides if the user can interact with the parent nodes
                 * or just the leaf nodes. When this option is undefined, it will be
                 * true by default. However when allowTraversingTree is true, then it
                 * will be false by default.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-interactbyleaf-false/
                 *         False
                 * @sample {highcharts} highcharts/plotoptions/treemap-interactbyleaf-true-and-allowtraversingtree/
                 *         InteractByLeaf and allowTraversingTree is true
                 *
                 * @type      {boolean}
                 * @since     4.1.2
                 * @product   highcharts
                 * @apioption plotOptions.treemap.interactByLeaf
                 */
                /**
                 * The sort index of the point inside the treemap level.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-sortindex/
                 *         Sort by years
                 *
                 * @type      {number}
                 * @since     4.1.10
                 * @product   highcharts
                 * @apioption plotOptions.treemap.sortIndex
                 */
                /**
                 * A series specific or series type specific color set to apply instead
                 * of the global [colors](#colors) when
                 * [colorByPoint](#plotOptions.treemap.colorByPoint) is true.
                 *
                 * @type      {Array<Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject>}
                 * @since     3.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.colors
                 */
                /**
                 * Whether to display this series type or specific series item in the
                 * legend.
                 */
                showInLegend: false,
                /**
                 * @ignore-option
                 */
                marker: void 0,
                /**
                 * When using automatic point colors pulled from the `options.colors`
                 * collection, this option determines whether the chart should receive
                 * one color per series or one color per point.
                 *
                 * @see [series colors](#plotOptions.treemap.colors)
                 *
                 * @since     2.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.colorByPoint
                 */
                colorByPoint: false,
                /**
                 * @since 4.1.0
                 */
                dataLabels: {
                    defer: false,
                    enabled: true,
                    formatter: function () {
                        var point = this && this.point ?
                                this.point :
                                {},
                            name = isString(point.name) ? point.name : '';
                        return name;
                    },
                    inside: true,
                    verticalAlign: 'middle'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b>: {point.value}<br/>'
                },
                /**
                 * Whether to ignore hidden points when the layout algorithm runs.
                 * If `false`, hidden points will leave open spaces.
                 *
                 * @since 5.0.8
                 */
                ignoreHiddenPoint: true,
                /**
                 * This option decides which algorithm is used for setting position
                 * and dimensions of the points.
                 *
                 * @see [How to write your own algorithm](https://www.highcharts.com/docs/chart-and-series-types/treemap)
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-sliceanddice/
                 *         SliceAndDice by default
                 * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-stripes/
                 *         Stripes
                 * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-squarified/
                 *         Squarified
                 * @sample {highcharts} highcharts/plotoptions/treemap-layoutalgorithm-strip/
                 *         Strip
                 *
                 * @since      4.1.0
                 * @validvalue ["sliceAndDice", "stripes", "squarified", "strip"]
                 */
                layoutAlgorithm: 'sliceAndDice',
                /**
                 * Defines which direction the layout algorithm will start drawing.
                 *
                 * @since       4.1.0
                 * @validvalue ["vertical", "horizontal"]
                 */
                layoutStartingDirection: 'vertical',
                /**
                 * Enabling this option will make the treemap alternate the drawing
                 * direction between vertical and horizontal. The next levels starting
                 * direction will always be the opposite of the previous.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-alternatestartingdirection-true/
                 *         Enabled
                 *
                 * @since 4.1.0
                 */
                alternateStartingDirection: false,
                /**
                 * Used together with the levels and allowTraversingTree options. When
                 * set to false the first level visible to be level one, which is
                 * dynamic when traversing the tree. Otherwise the level will be the
                 * same as the tree structure.
                 *
                 * @since 4.1.0
                 */
                levelIsConstant: true,
                /**
                 * Options for the button appearing when drilling down in a treemap.
                 * Deprecated and replaced by
                 * [traverseUpButton](#plotOptions.treemap.traverseUpButton).
                 *
                 * @deprecated
                 */
                drillUpButton: {
                    /**
                     * The position of the button.
                     *
                     * @deprecated
                     */
                    position: {
                        /**
                         * Vertical alignment of the button.
                         *
                         * @deprecated
                         * @type      {Highcharts.VerticalAlignValue}
                         * @default   top
                         * @product   highcharts
                         * @apioption plotOptions.treemap.drillUpButton.position.verticalAlign
                         */
                        /**
                         * Horizontal alignment of the button.
                         *
                         * @deprecated
                         * @type {Highcharts.AlignValue}
                         */
                        align: 'right',
                        /**
                         * Horizontal offset of the button.
                         *
                         * @deprecated
                         */
                        x: -10,
                        /**
                         * Vertical offset of the button.
                         *
                         * @deprecated
                         */
                        y: 10
                    }
                },
                /**
                 * Options for the button appearing when traversing down in a treemap.
                 */
                traverseUpButton: {
                    /**
                     * The position of the button.
                     */
                    position: {
                        /**
                         * Vertical alignment of the button.
                         *
                         * @type      {Highcharts.VerticalAlignValue}
                         * @default   top
                         * @product   highcharts
                         * @apioption plotOptions.treemap.traverseUpButton.position.verticalAlign
                         */
                        /**
                         * Horizontal alignment of the button.
                         *
                         * @type {Highcharts.AlignValue}
                         */
                        align: 'right',
                        /**
                         * Horizontal offset of the button.
                         */
                        x: -10,
                        /**
                         * Vertical offset of the button.
                         */
                        y: 10
                    }
                },
                /**
                 * Set options on specific levels. Takes precedence over series options,
                 * but not point options.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-levels/
                 *         Styling dataLabels and borders
                 * @sample {highcharts} highcharts/demo/treemap-with-levels/
                 *         Different layoutAlgorithm
                 *
                 * @type      {Array<*>}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels
                 */
                /**
                 * Can set a `borderColor` on all points which lies on the same level.
                 *
                 * @type      {Highcharts.ColorString}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.borderColor
                 */
                /**
                 * Set the dash style of the border of all the point which lies on the
                 * level. See
                 * [plotOptions.scatter.dashStyle](#plotoptions.scatter.dashstyle)
                 * for possible options.
                 *
                 * @type      {Highcharts.DashStyleValue}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.borderDashStyle
                 */
                /**
                 * Can set the borderWidth on all points which lies on the same level.
                 *
                 * @type      {number}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.borderWidth
                 */
                /**
                 * Can set a color on all points which lies on the same level.
                 *
                 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.color
                 */
                /**
                 * A configuration object to define how the color of a child varies from
                 * the parent's color. The variation is distributed among the children
                 * of node. For example when setting brightness, the brightness change
                 * will range from the parent's original brightness on the first child,
                 * to the amount set in the `to` setting on the last node. This allows a
                 * gradient-like color scheme that sets children out from each other
                 * while highlighting the grouping on treemaps and sectors on sunburst
                 * charts.
                 *
                 * @sample highcharts/demo/sunburst/
                 *         Sunburst with color variation
                 *
                 * @since     6.0.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.colorVariation
                 */
                /**
                 * The key of a color variation. Currently supports `brightness` only.
                 *
                 * @type       {string}
                 * @since      6.0.0
                 * @product    highcharts
                 * @validvalue ["brightness"]
                 * @apioption  plotOptions.treemap.levels.colorVariation.key
                 */
                /**
                 * The ending value of a color variation. The last sibling will receive
                 * this value.
                 *
                 * @type      {number}
                 * @since     6.0.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.colorVariation.to
                 */
                /**
                 * Can set the options of dataLabels on each point which lies on the
                 * level.
                 * [plotOptions.treemap.dataLabels](#plotOptions.treemap.dataLabels) for
                 * possible values.
                 *
                 * @extends   plotOptions.treemap.dataLabels
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.dataLabels
                 */
                /**
                 * Can set the layoutAlgorithm option on a specific level.
                 *
                 * @type       {string}
                 * @since      4.1.0
                 * @product    highcharts
                 * @validvalue ["sliceAndDice", "stripes", "squarified", "strip"]
                 * @apioption  plotOptions.treemap.levels.layoutAlgorithm
                 */
                /**
                 * Can set the layoutStartingDirection option on a specific level.
                 *
                 * @type       {string}
                 * @since      4.1.0
                 * @product    highcharts
                 * @validvalue ["vertical", "horizontal"]
                 * @apioption  plotOptions.treemap.levels.layoutStartingDirection
                 */
                /**
                 * Decides which level takes effect from the options set in the levels
                 * object.
                 *
                 * @sample {highcharts} highcharts/plotoptions/treemap-levels/
                 *         Styling of both levels
                 *
                 * @type      {number}
                 * @since     4.1.0
                 * @product   highcharts
                 * @apioption plotOptions.treemap.levels.level
                 */
                // Presentational options
                /**
                 * The color of the border surrounding each tree map item.
                 *
                 * @type {Highcharts.ColorString}
                 */
                borderColor: "#e6e6e6" /* neutralColor10 */,
                /**
                 * The width of the border surrounding each tree map item.
                 */
                borderWidth: 1,
                colorKey: 'colorValue',
                /**
                 * The opacity of a point in treemap. When a point has children, the
                 * visibility of the children is determined by the opacity.
                 *
                 * @since 4.2.4
                 */
                opacity: 0.15,
                /**
                 * A wrapper object for all the series options in specific states.
                 *
                 * @extends plotOptions.heatmap.states
                 */
                states: {
                    /**
                     * Options for the hovered series
                     *
                     * @extends   plotOptions.heatmap.states.hover
                     * @excluding halo
                     */
                    hover: {
                        /**
                         * The border color for the hovered state.
                         */
                        borderColor: "#999999" /* neutralColor40 */,
                        /**
                         * Brightness for the hovered point. Defaults to 0 if the
                         * heatmap series is loaded first, otherwise 0.1.
                         *
                         * @type    {number}
                         * @default undefined
                         */
                        brightness: HeatmapSeries ? 0 : 0.1,
                        /**
                         * @extends plotOptions.heatmap.states.hover.halo
                         */
                        halo: false,
                        /**
                         * The opacity of a point in treemap. When a point has children,
                         * the visibility of the children is determined by the opacity.
                         *
                         * @since 4.2.4
                         */
                        opacity: 0.75,
                        /**
                         * The shadow option for hovered state.
                         */
                        shadow: false
                    }
                }
            });
            return TreemapSeries;
        }(ScatterSeries));
        extend(TreemapSeries.prototype, {
            buildKDTree: noop,
            colorKey: 'colorValue',
            directTouch: true,
            drawLegendSymbol: LegendSymbol.drawRectangle,
            getExtremesFromAll: true,
            getSymbol: noop,
            optionalAxis: 'colorAxis',
            parallelArrays: ['x', 'y', 'value', 'colorValue'],
            pointArrayMap: ['value'],
            pointClass: TreemapPoint,
            trackerGroups: ['group', 'dataLabelsGroup'],
            utils: {
                recursive: TreemapUtilities.recursive
            }
        });
        SeriesRegistry.registerSeriesType('treemap', TreemapSeries);
        /* *
         *
         *  Default Export
         *
         * */
        /* *
         *
         *  API Options
         *
         * */
        /**
         * A `treemap` series. If the [type](#series.treemap.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.treemap
         * @excluding dataParser, dataURL, stack, dataSorting
         * @product   highcharts
         * @requires  modules/treemap
         * @apioption series.treemap
         */
        /**
         * An array of data points for the series. For the `treemap` series
         * type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `value` options. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.treemap.turboThreshold),
         *    this option is not available.
         *    ```js
         *      data: [{
         *        value: 9,
         *        name: "Point2",
         *        color: "#00FF00"
         *      }, {
         *        value: 6,
         *        name: "Point1",
         *        color: "#FF00FF"
         *      }]
         *    ```
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|null|*>}
         * @extends   series.heatmap.data
         * @excluding x, y, pointPadding
         * @product   highcharts
         * @apioption series.treemap.data
         */
        /**
         * The value of the point, resulting in a relative area of the point
         * in the treemap.
         *
         * @type      {number|null}
         * @product   highcharts
         * @apioption series.treemap.data.value
         */
        /**
         * Serves a purpose only if a `colorAxis` object is defined in the chart
         * options. This value will decide which color the point gets from the
         * scale of the colorAxis.
         *
         * @type      {number}
         * @since     4.1.0
         * @product   highcharts
         * @apioption series.treemap.data.colorValue
         */
        /**
         * Only for treemap. Use this option to build a tree structure. The
         * value should be the id of the point which is the parent. If no points
         * has a matching id, or this option is undefined, then the parent will
         * be set to the root.
         *
         * @sample {highcharts} highcharts/point/parent/
         *         Point parent
         * @sample {highcharts} highcharts/demo/treemap-with-levels/
         *         Example where parent id is not matching
         *
         * @type      {string}
         * @since     4.1.0
         * @product   highcharts
         * @apioption series.treemap.data.parent
         */
        ''; // adds doclets above to transpiled file

        return TreemapSeries;
    });
    _registerModule(_modules, 'masters/modules/treemap.src.js', [], function () {


    });
}));