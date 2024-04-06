import { useMemo, useState } from "react";
import { formatJSON } from "./formatJson.js";

const App = () => {
  const [src, setSrc] = useState<string>("");
  const [copy, setCopy] = useState<boolean>(false);

  const fmt: string = useMemo(() => formatJSON(src), [src]);

  const copyJSON = (): void => {
    navigator.clipboard.writeText(fmt);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000)
  }

  return (
    <div className="fixed w-full h-full flex flex-col md:flex-row bg-sky-900 p-3 space-y-3 md:space-y-0 md:space-x-3">
      <textarea
        value={src}
        onChange={(e) => setSrc(e.target.value)}
        className="h-1/2 md:h-auto w-full md:w-1/2 p-3 rounded"
      />


      <div className="relative whitespace-pre h-1/2 md:h-auto w-full md:w-1/2 text-white p-3">
        {fmt ? (
          <button
            onClick={copyJSON}
            className="absolute top-3 right-3 bg-white hover:bg-gray-50 rounded px-3 py-1 text-gray-900"
          >
            {copy ? "Copied" : "Copy"}
          </button>
        ) : null}
        <div className="overflow-x-auto h-full w-full">
          {fmt !== "" ? fmt : "Add some json to see the formatted output"}
        </div>
      </div>
    </div>
  );
}

export default App;
