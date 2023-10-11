import React from "react";
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
const CustomSetting = () => {
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        fontSize={14}
        value=""
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default CustomSetting;
