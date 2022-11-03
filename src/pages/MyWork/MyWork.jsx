import Layout from "../../containers/Layout/Layout";
import WorkContainer from "../../containers/WorkContainer/WorkContainer";
import "./MyWork.scss";
import HeaderSmall from "../../components/HeaderSmall/HeaderSmall";

const MyWork = () => {
  return (
    <Layout>
      <>
      <div className="my-work">
        <HeaderSmall text="My Projects" />
      </div>      
        <WorkContainer />
      </>      
    </Layout>
  )
}

export default MyWork