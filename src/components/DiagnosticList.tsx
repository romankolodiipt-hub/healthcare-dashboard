import { DIAGNOSTIC_TABLE_HEADERS } from "../consts/consts";
import { Diagnostic } from "../types/types";

interface DiagnosticListProps {
  diagnosticList: Diagnostic[];
}

export const DiagnosticList: React.FC<DiagnosticListProps> = ({
  diagnosticList,
}) => {
  return (
    <>
      <h2 className="card-title-24pt">Diagnostic List</h2>
      <div className="flex flex-col overflow-hidden">
        <div className="rounded-l-3xl flex sticky top-0 z-10 bg-[#F6F7F8] rounded-3xl body-emphasized-14pt">
          {DIAGNOSTIC_TABLE_HEADERS.map((item) => {
            return (
              <div key={item} className="w-1/3 p-4">
                {item}
              </div>
            );
          })}
        </div>
        <div className="h-full overflow-y-auto">
          {diagnosticList.map((item, index) => {
            return (
              <div
                key={`${item.name}${index}`}
                className="flex body-regular-14 border-b border-[var(--unnamed-color-f6f6f6)] items-center"
              >
                {Object.entries(item).map(([key, value]) => {
                  return (
                    <div key={`${key}${value}`} className="p-4 w-1/3">
                      {value}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
