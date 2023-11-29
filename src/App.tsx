// import { useState } from "react";
import "./App.css";
import FolderItems from "./components/FolderItems";

const rootFolderItems = {
  id: 1,
  isFolder: true,
  name: "root",
  subItems: [
    {
      id: 2,
      isFolder: true,
      name: "src",
      subItems: [
        {
          id: 3,
          isFolder: false,
          name: "App.tsx",
        },
        {
          id: 4,
          isFolder: true,
          name: "components",
          subItems: [
            {
              id: 10,
              isFolder: false,
              name: "Folder.tsx",
            },
            {
              id: 11,
              isFolder: false,
              name: "File.tsx",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      isFolder: false,
      name: "demo.tsx",
    },
    {
      id: 6,
      isFolder: true,
      name: "public",
      subItems: [],
    },
  ],
};

function App() {
  // const [items, setItems] = useState(rootFolderItems);
  return (
    <>
      <FolderItems explorerData={rootFolderItems} />
    </>
  );
}

export default App;
