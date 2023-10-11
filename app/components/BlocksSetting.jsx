import { Button, ChoiceList, FormLayout, Text } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

const BlocksSetting = () => {
  return (
    <div>
      <FormLayout>
        <Text variant="headingMd" as="h6">
          Table of content
        </Text>
        <p>This block is only available for paid plans</p>
      </FormLayout>
    </div>
  );
};

export default BlocksSetting;
