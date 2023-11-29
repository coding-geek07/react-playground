import { useState } from "react";

const FolderItems = ({ explorerData }) => {
  const [expand, setExpand] = useState(false);
  const showOrCollapse = () => {
    setExpand((prevState) => !prevState);
  };
  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <div onClick={showOrCollapse}>📁 {explorerData.name}</div>
        {expand && (
          <div style={{ paddingLeft: "15px" }}>
            {explorerData.subItems.map((item) =>
              item.isFolder ? (
                <FolderItems key={item.id} explorerData={item} />
              ) : (
                <div>📄 {item.name}</div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default FolderItems;
