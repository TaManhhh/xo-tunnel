import { Button, ChoiceList, FormLayout } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

const GeneralSetting = () => {
  const [selected, setSelected] = useState(["hidden"]);

  const handleChange = useCallback((value) => setSelected(value), []);
  return (
    <div>
      <FormLayout>
        <Button>Reauthenticate Notion</Button>
        <ChoiceList
          allowMultiple
          title=""
          disabled
          choices={[
            {
              label: "Change heading",
              value: "shipping",
              helpText: "This feature is only available for paid plans",
            },
            {
              label: "Open link in new tab",
              value: "confirmation",
              helpText: "This feature is only available for paid plans",
            },
          ]}
          selected={selected}
          onChange={handleChange}
        />
      </FormLayout>
    </div>
  );
};

export default GeneralSetting;
