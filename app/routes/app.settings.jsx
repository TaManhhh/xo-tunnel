import { useCallback, useState } from "react";
import {
  Layout,
  LegacyCard,
  Page,
  Button,
  FooterHelp,
  Link,
  Text,
  LegacyTabs,
} from "@shopify/polaris";
import GeneralSetting from "~/components/GeneralSetting";
import BlocksSetting from "~/components/BlocksSetting";
import ColorSetting from "~/components/ColorSetting";
import CustomSetting from "~/components/CustomSetting";
const Settings = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const tabs = [
    {
      id: "all-customers-1",
      content: "General",
      component: <GeneralSetting />,
      panelID: "all-customers-content-1",
    },
    {
      id: "accepts-marketing-1",
      content: "Blocks",
      component: <BlocksSetting />,
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: "Colors",
      component: <ColorSetting />,
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: "Custom code",
      component: <CustomSetting />,
      panelID: "prospects-content-1",
    },
  ];
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text variant="headingLg" as="h4">
              Settings
            </Text>
            <Button primarySuccess>Save</Button>
          </div>

          <LegacyCard>
            <LegacyTabs
              tabs={tabs}
              selected={selected}
              onSelect={handleTabChange}
            >
              <LegacyCard.Section>
                <div>{tabs[selected].component}</div>
              </LegacyCard.Section>
            </LegacyTabs>
          </LegacyCard>
          <FooterHelp>
            For help with XO Tunnel app, visit our
            <Link url="https://docs.xotiny.com/xo-tunnel/">
              Support Document
            </Link>
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Settings;
