import {
  Box,
  IndexTable,
  Layout,
  LegacyCard,
  Badge,
  Page,
  ButtonGroup,
  Button,
  FooterHelp,
  Link,
} from "@shopify/polaris";
import logo from "../asset/xo-tunnel.png";
import { Outlet } from "@remix-run/react";
export default function AdditionalPage() {
  const orders = [
    {
      id: "1018",
      title: "News",
      type: "blog",
      status: "Connected",
    },
    {
      id: "1019",
      title: "[Page]",
      type: "page",
      status: "Disconnected",
    },
    {
      id: "1020",
      title: "[Product]",
      type: "product",
      status: "Disconnected",
    },
    {
      id: "1021",
      title: "[Collection]",
      type: "collection",
      status: "Disconnected",
      // status: <Badge status="success">Disconnected</Badge>,
    },
  ];
  const resourceName = {
    singular: "order",
    plural: "orders",
  };
  // const { selectedResources, allResourcesSelected, handleSelectionChange } =
  //   useIndexResourceState(orders);
  const rowMarkup = orders.map(
    ({ id, title, type, status, operations }, index) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{type}</IndexTable.Cell>
        <IndexTable.Cell>
          {status === "Disconnected" ? (
            <Badge>Disconnected</Badge>
          ) : (
            <Badge status="success">Connected</Badge>
          )}
        </IndexTable.Cell>
        <IndexTable.Cell>
          {status === "Disconnected" ? (
            <ButtonGroup>
              <Button size="slim" disabled>
                Configure
              </Button>
              <Button size="slim" disabled>
                Refresh
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <Button size="slim">Configure</Button>
              <Button size="slim">Refresh</Button>
            </ButtonGroup>
          )}
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <img src={logo} style={{ width: 161, marginBottom: 50 }} alt="" />
          <LegacyCard>
            <IndexTable
              resourceName={resourceName}
              itemCount={orders.length}
              selectable={false}
              headings={[
                { title: "Title" },
                { title: "Type" },
                { title: "Status" },
                { title: "Operations" },
              ]}
            >
              {rowMarkup}
            </IndexTable>
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
}
