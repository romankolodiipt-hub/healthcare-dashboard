import { LabResult } from "../types/types";
import { Article } from "./Article";

interface LabResultsProps {
  labResults: string[];
}

export const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  return (
    <Article>
      <h2 className="card-title-24pt line">Lab Results</h2>
      <ul className="overflow-auto">
        {labResults.map((result) => {
          return (
            <li key={result}>
              <button className="flex justify-between items-center w-full hover:bg-[#F6F7F8] px-4 py-3 cursor-pointer">
                <p>{result}</p>
                <img src="/icons/download.svg" alt="Download" />
              </button>
            </li>
          );
        })}
      </ul>
    </Article>
  );
};
