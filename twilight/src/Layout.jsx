import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, Burger, Group, Skeleton, Title } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';

export default function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify='space-between'>
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            <Title order={2}>Twilight</Title>
          </Group>
          <Group>
            <ActionIcon variant="default"><i className="bi bi-house"></i></ActionIcon>
            <ActionIcon variant="default"><i className="bi bi-search"></i></ActionIcon>
            <ActionIcon variant="default"><i className="bi bi-sun"></i></ActionIcon>
            <ActionIcon variant="default"><i className="bi bi-gear"></i></ActionIcon>
          </Group>
        </Group>

      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
