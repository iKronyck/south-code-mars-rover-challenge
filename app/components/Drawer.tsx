import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import useFilterForm from "../hooks/useFilterForm";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const {
    rover,
    camera,
    filter,
    filters,
    filterTypeVal,
    onChangeCamera,
    onChangeRover,
    onChangeFilter,
    onChangeFilterTypeVal,
    cameras,
    rovers,
    filterData,
  } = useFilterForm();
  return (
    <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>
        <DrawerBody>
          <form>
            <Box
              border="1px dashed rgba(145, 158, 171, 0.5)"
              borderRadius={5}
              my={4}
              p={4}
              display="flex"
              alignItems="center"
            >
              <FormControl>
                <FormLabel>Bookmarks</FormLabel>
                <Select variant="filled" placeholder="Select bookmark">
                  {/* {getStorage().get().map((key: Query, index: number) => (<option key={index} value={key.id}>{key.name}</option>))} */}
                </Select>
              </FormControl>
              {/* <IconButton isDisabled={(query?.name === undefined || query?.name === "")} onClick={() => { getStorage().delete(query.id); toast({ title: "Bookmark successfully deleted", status: "info", isClosable: true }); handleComplete(undefined); setDrawerOpen(false) }} ml={2} alignSelf="flex-end" aria-label='delete' colorScheme="red" icon={<DeleteIcon />} /> */}
            </Box>
            <Box
              border="1px dashed rgba(145, 158, 171, 0.5)"
              borderRadius={5}
              p={4}
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <FormControl isRequired>
                <FormLabel>Rover</FormLabel>
                <Select
                  name="rover"
                  value={rover}
                  onChange={(event) => onChangeRover(event.target.value)}
                  placeholder="Select rover"
                >
                  {rovers.map((key, index) => (
                    <option key={index}>{key}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Camera</FormLabel>
                <Select
                  name="camera"
                  value={camera}
                  onChange={(event) => onChangeCamera(event.target.value)}
                  placeholder="Select camera"
                >
                  {cameras.map((key, index) => (
                    <option key={index}>{key}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Filter type</FormLabel>
                <Select
                  name="filter_type"
                  value={filter}
                  onChange={(e) => onChangeFilter(e.target.value)}
                  variant="outline"
                  placeholder="Select a filter type"
                >
                  {filters.map((key, index) => (
                    <option key={index}>{key}</option>
                  ))}
                </Select>
              </FormControl>
              {filter ? (
                <FormControl isRequired>
                  <FormLabel>
                    {filter === "earth_date" ? "Earth date" : "Sol date"}
                  </FormLabel>
                  <Input
                    type={filter === "earth_date" ? "date" : "number"}
                    name="filter_value"
                    value={filterTypeVal}
                    onChange={(event) =>
                      onChangeFilterTypeVal(event.target.value)
                    }
                  />
                </FormControl>
              ) : null}
            </Box>
          </form>
        </DrawerBody>

        <DrawerFooter>
          <Button bg="#fff" color="#eb601d" border="1px solid #eb601d">
            Save to Bookmarks
          </Button>
          <Button
            bg="#eb601d"
            color="white"
            borderRadius={5}
            ml={3}
            onClick={() => {
              onClose();
              filterData();
            }}
          >
            Filter
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
}
