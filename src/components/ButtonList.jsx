import Button from "./Button"
const buttonList = () => {
  return <div className="hidden sm:block">
    <Button name="All"/>
    <Button name="Music"/>
    <Button name="News"/>
    <Button name="Gaming"/>
    <Button name="Gadgets"/>
    <Button name="Motorcycles"/>
    <Button name="Podcasts"/>
    <Button name="Trailers"/>
    <Button name="Live"/>
    <Button name="Computer"/>
  </div>;
};

export default buttonList;
