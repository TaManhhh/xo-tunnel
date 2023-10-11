import {
  Box,
  Layout,
  LegacyCard,
  Page,
  Button,
  Text,
  List,
} from "@shopify/polaris";
import styles from "../styles/styles.css";
const Plans = () => {
  return (
    <Page>
      <div className="plans">
        <Box paddingBlockStart={"3"} paddingBlockEnd={"5"}>
          <Text variant="headingLg" as="h4">
            Plans
          </Text>
        </Box>
        <Layout>
          <Layout.Section oneThird>
            <LegacyCard title="Free">
              <LegacyCard.Section title="Items">
                <div>
                  <div>
                    <Text variant="heading2xl" as="h3">
                      $0
                    </Text>
                    /month
                  </div>
                  <p style={{ color: "#9f9f9f" }}> &nbsp;</p>
                  <List type="bullet" spacing="extraTight">
                    <List.Item>12 articles</List.Item>
                    <List.Item>Basic blocks</List.Item>
                    <List.Item>Manual sync</List.Item>
                    <List.Item>&nbsp;</List.Item>
                    <List.Item>&nbsp;</List.Item>
                    <List.Item>&nbsp;</List.Item>
                    <List.Item>&nbsp;</List.Item>
                  </List>
                  <Button disabled> Your current plan</Button>
                </div>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Basic">
              <LegacyCard.Section title="Items">
                <div>
                  <div>
                    <Text variant="heading2xl" as="h3">
                      $4<small>.95</small>
                    </Text>
                    /month
                  </div>
                  <p style={{ color: "#9f9f9f" }}>7 days free trial</p>
                  <List type="bullet" spacing="extraTight">
                    <List.Item>Unlimited articles</List.Item>
                    <List.Item>20 pages</List.Item>
                    <List.Item>20 products</List.Item>
                    <List.Item>20 collections</List.Item>
                    <List.Item>Full blocks</List.Item>
                    <List.Item>Sync every hour</List.Item>
                    <List.Item>Premium support</List.Item>
                  </List>
                  <Button primarySuccess> Start free trial</Button>
                </div>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneThird>
            <LegacyCard title="Pro">
              <LegacyCard.Section title="Items">
                <div>
                  <div>
                    <Text variant="heading2xl" as="h3">
                      $8<small>.95</small>
                    </Text>
                    /month
                  </div>
                  <p style={{ color: "#9f9f9f" }}>7 days free trial</p>
                  <List type="bullet" spacing="extraTight">
                    <List.Item>Unlimited articles</List.Item>
                    <List.Item>Unlimited pages</List.Item>
                    <List.Item>Unlimited products</List.Item>
                    <List.Item>Unlimited collections</List.Item>
                    <List.Item>Full blocks</List.Item>
                    <List.Item>Sync every hour</List.Item>
                    <List.Item>Premium support</List.Item>
                  </List>
                  <Button primarySuccess> Start free trial</Button>
                </div>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
};

export default Plans;
export const links = () => [{ rel: "stylesheet", href: styles }];
