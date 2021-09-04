import { Head } from "next/document";
import {getNotionPageData} from "../resources/utils/notion.util"
import Notionpage from "../resources/components/notion-page"

export default function IndexPage({homePageNotionData, footerNotionPageData}) {
    return(
        <div className="app">
            {/* <Head>Partner DrinkIQ</Head> */}
            <div className="main-content">
                <div className="container">
                    <Notionpage pageData={homePageNotionData} />
                </div>
            </div>
            <div className="footer">
                <div className="container">
                <Notionpage pageData={footerNotionPageData} />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
	const homePageNotionData = await getNotionPageData(
	  "9f494a862838429495fb60a954439337"
	);
	const footerNotionPageData = await getNotionPageData(
	  "47ce0bec2b6d4fb9b7e90e234bc3e280"
	);	

	return {
	  props: {
		homePageNotionData,
		footerNotionPageData,		
	  },
	};
}