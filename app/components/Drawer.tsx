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
  Checkbox,
} from "@chakra-ui/react";
import useBookmarkStore from "../hooks/useBookmarks";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  CURIOSITY_CAMERAS,
  ERover,
  FILTERS_LIST,
  OPPORTUNITY_CAMERAS,
  ROVERS_LIST,
  SPIRIT_CAMERAS,
} from "../utils/const";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [cameras, setCameras] = useState<string[]>([]);
  const [filter, setFilter] = useState("");
  const [saveBookmark, setSaveBookmark] = useState(false);
  const [filterTypeVal, setFilterTypeVal] = useState("");
  const [bookmarkName, setBookmarkName] = useState("");
  const { bookmarks, addBookmark } = useBookmarkStore();

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChangeRover = (value: string) => {
    setRover(value);

    if (value === ERover.CURIOSITY) setCameras(CURIOSITY_CAMERAS);
    else if (value === ERover.OPPORTUNITY) setCameras(OPPORTUNITY_CAMERAS);
    else if (value === ERover.SPIRIT) setCameras(SPIRIT_CAMERAS);
    else setCameras([]);
  };

  const filterData = () => {
    const params = new URLSearchParams(searchParams);
    if (camera) params.set("camera", camera);
    if (filter) params.set(filter, filterTypeVal);
    onClose();
    if (saveBookmark) {
      addBookmark({
        name: bookmarkName,
        camera,
        sol: filter === "sol" ? filterTypeVal : "",
        earth_date: filter === "earth_date" ? filterTypeVal : "",
      });
    }
    replace(`${pathname}?${params.toString()}`);
    setRover("");
    setCamera("");
    setCameras([]);
    setFilter("");
    setSaveBookmark(false);
    setFilterTypeVal("");
    setBookmarkName("");
  };

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
                  {bookmarks.map((key, index) => (
                    <option key={key.name}>{key.name}</option>
                  ))}
                </Select>
              </FormControl>
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
                  {ROVERS_LIST.map((key, index) => (
                    <option key={index}>{key}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Camera</FormLabel>
                <Select
                  name="camera"
                  value={camera}
                  onChange={(event) => setCamera(event.target.value)}
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
                  onChange={(e) => setFilter(e.target.value)}
                  variant="outline"
                  placeholder="Select a filter type"
                >
                  {FILTERS_LIST.map((key, index) => (
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
                    onChange={(event) => setFilterTypeVal(event.target.value)}
                  />
                </FormControl>
              ) : null}
              <FormControl>
                <Checkbox
                  isChecked={saveBookmark}
                  colorScheme="orange"
                  onChange={(e) => setSaveBookmark(e.target.checked)}
                >
                  Save to Bookmarks
                </Checkbox>
              </FormControl>
              {saveBookmark ? (
                <FormControl isRequired>
                  <FormLabel>Bookmark name</FormLabel>
                  <Input
                    type="text"
                    name="bookmark"
                    value={bookmarkName}
                    onChange={(event) => setBookmarkName(event.target.value)}
                  />
                </FormControl>
              ) : null}
            </Box>
          </form>
        </DrawerBody>

        <DrawerFooter>
          <Button
            flex={1}
            bg="#eb601d"
            color="white"
            borderRadius={5}
            ml={3}
            onClick={filterData}
          >
            {saveBookmark ? "Save and Filter" : "Filter"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
}
