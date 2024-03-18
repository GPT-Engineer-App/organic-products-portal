import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Grid, GridItem, Container, Stack, Input, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh, juicy, and pesticide-free apples.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1502666231573-e36f6cdec2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYXBwbGVzfGVufDB8fHx8MTcxMDc2MjE3NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Organic Carrots",
    description: "Crisp, sweet, and nutrient-rich carrots.",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1533478583204-680d4ff74891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2Fycm90c3xlbnwwfHx8fDE3MTA3NjIxNzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Organic Spinach",
    description: "Tender, green, and packed with vitamins.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1665889950448-7d17aa579414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc3BpbmFjaHxlbnwwfHx8fDE3MTA3NjIxNzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Organic Bananas",
    description: "Sweet, ripe, and perfect for snacking.",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1603052875302-d376b7c0638a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYmFuYW5hc3xlbnwwfHx8fDE3MTA3NjIxNzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "Organic Kale",
    description: "Nutrient-dense, crisp, and versatile.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwa2FsZXxlbnwwfHx8fDE3MTA3NjIxNzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    name: "Organic Tomatoes",
    description: "Juicy, flavorful, and perfect for salads.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXN8ZW58MHx8fHwxNzEwNzYyMTc0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box>
      <Box bg={useColorModeValue("green.500", "green.700")} py={4} px={8} color="white">
        <Container maxW="container.lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Heading as="h1" size="xl">
              Organic Shop
            </Heading>
            <Stack direction="row" spacing={4}>
              <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} bg="white" color="gray.800" />
              <IconButton icon={<FaSearch />} aria-label="Search" bg="white" color="gray.800" />
              <Button leftIcon={<FaShoppingCart />} colorScheme="white" variant="outline">
                Cart ({cart.length})
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {filteredProducts.map((product) => (
            <GridItem key={product.id}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>
                    {product.name}
                  </Heading>
                  <Text mb={2}>{product.description}</Text>
                  <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
                  <Button mt={4} colorScheme="green" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
