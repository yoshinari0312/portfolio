import { Link } from "../common/Link"
import { Layout } from "../common/Layout"
import { TitleHeader } from "../common/TitleHeader"
import { WorkCard } from "./WorkCard"
import { WorkLayout } from "./WorkLayout"
import { WorkImg } from "./WorkImg"
import { WorkType } from "./WorkType"
import { WorkDetail } from "./WorkDetail"

export const Works = () => {
  return (
    <Layout id="works">
      <TitleHeader>Works</TitleHeader>
      <WorkLayout>
        <WorkCard>
          <WorkImg src="../img/NRI.jpg" alt="ロボット画像">関係性ロボットシステム</WorkImg>
          <WorkType>研究</WorkType>
          <WorkDetail>
            {["Python, Java, JavaScript, OpenAI API, Pepperくんなどを使用",
              "三者関係を理解しながら会話できるロボットのための会話システム",
              "ロボットは三者関係をより良い関係性にする発言が可能に",
              "2つの学会で発表"]}
          </WorkDetail>
          <Link url="https://drive.google.com/file/d/1qb9WRXiMv1stRejVCxuQ2k9KG8TDCYbm/view?usp=sharing">url</Link>
        </WorkCard>
        <WorkCard>
          <WorkImg src="../img/AWS.jpg" alt="ロボット画像">関係性ロボットシステム</WorkImg>
          <WorkType>研究</WorkType>
          <WorkDetail>
            {["Python, Java, JavaScript, OpenAI API, Pepperくんなどを使用",
              "三者関係を理解しながら会話できるロボットのための会話システム",
              "ロボットは三者関係をより良い関係性にする発言が可能に",
              "2つの学会で発表"]}
          </WorkDetail>
          <Link url="https://drive.google.com/file/d/1qb9WRXiMv1stRejVCxuQ2k9KG8TDCYbm/view?usp=sharing">url</Link>
        </WorkCard>
        <WorkCard>
          <WorkImg src="../img/NSSOL.png" alt="ロボット画像">関係性ロボットシステム</WorkImg>
          <WorkType>研究</WorkType>
          <WorkDetail>
            {["Python, Java, JavaScript, OpenAI API, Pepperくんなどを使用",
              "三者関係を理解しながら会話できるロボットのための会話システム",
              "ロボットは三者関係をより良い関係性にする発言が可能に",
              "2つの学会で発表"]}
          </WorkDetail>
          <Link url="https://drive.google.com/file/d/1qb9WRXiMv1stRejVCxuQ2k9KG8TDCYbm/view?usp=sharing">url</Link>
        </WorkCard>
      </WorkLayout>
    </Layout>
  )
}
