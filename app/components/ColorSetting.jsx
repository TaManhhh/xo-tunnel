import { Checkbox, FormLayout } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

const ColorSetting = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  return (
    <div>
      <FormLayout>
        <Checkbox
          label="Use default Notion colors"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          label="Use default Notion background colors"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          label="Use default Notion callout colors"
          checked={checked}
          onChange={handleChange}
        />
      </FormLayout>
    </div>
  );
};

export default ColorSetting;
