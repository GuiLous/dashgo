import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>
            Guilherme Lourenço
          </Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            guilhermesilva@acad.ifma.edu.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Guilherme Lourenço" />
    </Flex>
  )
}
