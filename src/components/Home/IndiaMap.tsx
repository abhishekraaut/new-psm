import { useState } from "react";

interface State {
  name: string;
  path: string;
  cx?: number;
  cy?: number;
}

const indianStates: State[] = [
  { name: "Jammu & Kashmir", path: "M200,20 L220,25 L230,35 L225,50 L210,55 L195,45 Z", cx: 210, cy: 38 },
  { name: "Punjab", path: "M195,55 L210,55 L215,70 L205,75 L190,70 Z", cx: 202, cy: 65 },
  { name: "Haryana", path: "M205,75 L220,80 L225,95 L210,100 L200,90 Z", cx: 212, cy: 87 },
  { name: "Rajasthan", path: "M180,85 L200,90 L210,100 L215,130 L200,150 L170,140 L165,110 Z", cx: 192, cy: 118 },
  { name: "Gujarat", path: "M140,150 L170,140 L175,165 L165,190 L145,185 L135,165 Z", cx: 157, cy: 165 },
  { name: "Maharashtra", path: "M175,165 L210,160 L225,190 L215,220 L185,225 L165,210 Z", cx: 195, cy: 192 },
  { name: "Madhya Pradesh", path: "M215,130 L260,125 L275,150 L270,175 L240,180 L210,160 Z", cx: 245, cy: 152 },
  { name: "Uttar Pradesh", path: "M225,95 L280,90 L295,110 L290,135 L260,125 L225,130 Z", cx: 260, cy: 112 },
  { name: "Bihar", path: "M290,135 L320,130 L330,145 L320,160 L295,155 L280,145 Z", cx: 305, cy: 145 },
  { name: "West Bengal", path: "M320,160 L345,155 L355,175 L345,190 L325,185 Z", cx: 337, cy: 172 },
  { name: "Odisha", path: "M295,175 L325,170 L340,195 L330,220 L305,215 L290,195 Z", cx: 315, cy: 195 },
  { name: "Jharkhand", path: "M295,155 L320,160 L325,175 L310,185 L295,175 Z", cx: 310, cy: 170 },
  { name: "Chhattisgarh", path: "M270,175 L295,175 L305,195 L295,215 L270,210 L260,190 Z", cx: 282, cy: 192 },
  { name: "Telangana", path: "M240,220 L265,215 L270,235 L255,250 L235,240 Z", cx: 252, cy: 232 },
  { name: "Andhra Pradesh", path: "M255,250 L280,245 L295,270 L285,295 L260,290 L245,270 Z", cx: 270, cy: 270 },
  { name: "Karnataka", path: "M215,240 L245,235 L260,260 L250,290 L220,285 L205,260 Z", cx: 232, cy: 262 },
  { name: "Tamil Nadu", path: "M230,295 L260,290 L265,320 L245,340 L220,330 L215,310 Z", cx: 242, cy: 315 },
  { name: "Kerala", path: "M205,300 L220,295 L225,325 L215,345 L200,340 L195,315 Z", cx: 212, cy: 320 },
  { name: "Goa", path: "M190,220 L205,218 L210,235 L200,240 L188,232 Z", cx: 198, cy: 228 },
];

export const IndiaMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            State-wise Coverage
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on any state to view detailed information
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <svg
              viewBox="0 0 400 380"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Map paths */}
              {indianStates.map((state) => (
                <g key={state.name}>
                  <path
                    d={state.path}
                    className={`transition-all cursor-pointer ${
                      hoveredState === state.name || selectedState === state.name
                        ? "fill-primary stroke-primary-foreground"
                        : "fill-muted stroke-border hover:fill-primary/70"
                    }`}
                    strokeWidth="1"
                    onMouseEnter={() => setHoveredState(state.name)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
                  />
                  {/* State labels - show on hover or selection */}
                  {(hoveredState === state.name || selectedState === state.name) && state.cx && state.cy && (
                    <text
                      x={state.cx}
                      y={state.cy}
                      className="text-[8px] font-semibold pointer-events-none"
                      fill="currentColor"
                      textAnchor="middle"
                    >
                      {state.name}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Selected state info */}
          {selectedState && (
            <div className="mt-6 bg-primary/10 border border-primary rounded-lg p-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-2">{selectedState}</h3>
              <p className="text-muted-foreground">
                Click on other states to view their information or click the same state again to deselect.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};