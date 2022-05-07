import { Box } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box marginX="auto" padding={8} maxWidth={1200} transition="0.5s ease-out">
      {children}
    </Box>
  );
};

export default Layout;
