import "./Homepage.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import SideIcons from "../../components/side-icons/SideIcons";
import { useMemo, useState } from "react";
import { Videos } from "../../data";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [searchField, setSearchField] = useState("");

  const onChange = (e) => setSearchField(e.target.value);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const filteredVideo = useMemo(() => {
    if (searchField.length < 1) return Videos;
    else {
      return Videos.filter((Video) =>
        Video.title.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  }, [searchField]);

  return (
    <>
      <Header onClickBar={handleOpen} onChange={onChange} />
      <div className="homeContainer">
        <div className={ open ? "sideicons" : "sidebar" }>
        {open ? <SideIcons /> : <Sidebar />}
        </div>
        
        <Rightbar filteredVideo={filteredVideo} />
      </div>
    </>
  );
};

export default Homepage;
