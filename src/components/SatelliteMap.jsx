import React from 'react';
import { FaCrop, FaBuffer, FaLayerGroup, FaInfoCircle } from 'react-icons/fa';

const PolygonControls = ({
  isClippingEnabled,
  setIsClippingEnabled,
  isBufferEnabled,
  setIsBufferEnabled,
  bufferDistance,
  setBufferDistance,
  processedPolygons,
  showAdvanced = false,
  onToggleAdvanced
}) => {
  const clippedCount = processedPolygons.filter(p => p.isClipped).length;
  const bufferedCount = processedPolygons.filter(p => p.isBuffered).length;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <FaLayerGroup className="mr-2 text-green-600" />
          Polygon Processing Tools
        </h3>
        {onToggleAdvanced && (
          <button
            onClick={onToggleAdvanced}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <FaInfoCircle className="mr-1" />
            {showAdvanced ? 'Hide' : 'Show'} Details
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {/* Clipping Controls */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center text-sm font-medium text-blue-800">
              <FaCrop className="mr-2" />
              Polygon Clipping
            </label>
            <button
              onClick={() => setIsClippingEnabled(!isClippingEnabled)}
              className={`w-12 h-6 rounded-full relative transition-all duration-200 ${
                isClippingEnabled ? 'bg-blue-500 shadow-md' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 shadow ${
                isClippingEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
          <p className="text-xs text-blue-700">
            {isClippingEnabled 
              ? `Clipping polygons to field boundary (${clippedCount} clipped)`
              : 'Clip polygons to field boundaries'
            }
          </p>
        </div>

        {/* Buffer Controls */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center text-sm font-medium text-green-800">
              <FaBuffer className="mr-2" />
              Buffer Zone
            </label>
            <button
              onClick={() => setIsBufferEnabled(!isBufferEnabled)}
              className={`w-12 h-6 rounded-full relative transition-all duration-200 ${
                isBufferEnabled ? 'bg-green-500 shadow-md' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 shadow ${
                isBufferEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
          
          <p className="text-xs text-green-700 mb-2">
            {isBufferEnabled 
              ? `Creating ${bufferDistance}m buffer zones (${bufferedCount} buffered)`
              : 'Add buffer zones around polygons'
            }
          </p>
          
          {isBufferEnabled && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-green-700 font-medium">
                  Buffer Distance
                </label>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                  {bufferDistance}m
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={bufferDistance}
                onChange={(e) => setBufferDistance(parseInt(e.target.value))}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(bufferDistance/50)*100}%, #d1fae5 ${(bufferDistance/50)*100}%, #d1fae5 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-green-600 mt-1">
                <span>1m</span>
                <span>25m</span>
                <span>50m</span>
              </div>
            </div>
          )}
        </div>

        {/* Statistics */}
        {(isClippingEnabled || isBufferEnabled) && processedPolygons.length > 0 && (
          <div className="bg-gray-50 p-3 rounded-lg border">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Processing Summary</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-2 rounded border">
                <div className="text-gray-600">Total Polygons</div>
                <div className="text-lg font-semibold text-gray-800">{processedPolygons.length}</div>
              </div>
              {isClippingEnabled && (
                <div className="bg-white p-2 rounded border">
                  <div className="text-blue-600">Clipped</div>
                  <div className="text-lg font-semibold text-blue-800">{clippedCount}</div>
                </div>
              )}
              {isBufferEnabled && (
                <div className="bg-white p-2 rounded border">
                  <div className="text-green-600">Buffered</div>
                  <div className="text-lg font-semibold text-green-800">{bufferedCount}</div>
                </div>
              )}
              {isClippingEnabled && isBufferEnabled && (
                <div className="bg-white p-2 rounded border">
                  <div className="text-orange-600">Both Applied</div>
                  <div className="text-lg font-semibold text-orange-800">
                    {processedPolygons.filter(p => p.isClipped && p.isBuffered).length}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {showAdvanced && (
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <h4 className="text-sm font-medium text-yellow-800 mb-2">Legend</h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-black mr-2"></div>
                <span>Original polygons</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-blue-500 mr-2"></div>
                <span className="text-blue-700">Clipped polygons</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-green-500 mr-2"></div>
                <span className="text-green-700">Buffered polygons</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 border-2 border-orange-500 mr-2"></div>
                <span className="text-orange-700">Clipped + Buffered</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolygonControls;