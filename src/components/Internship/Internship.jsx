import { Layout } from "../common/Layout"
import { TitleHeader } from "../common/TitleHeader"
import { Intern } from "./Intern"
import { InternCompany } from "./InternCompany"
import { InternDetail } from "./InternDetail"
import { InternImg } from "./InternImg"
import "./Internship.css"
import { InternType } from "./InternType"

export const Internship = () => {
  return (
    <Layout id="internship">
      <TitleHeader>Affiliation/Internship</TitleHeader>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/imaiLogo.png`} alt="imaiLogo"></InternImg>
        </div>
        <div>
          <InternCompany>今井倫太研究室（2023年2月〜現在）</InternCompany>
          <InternType>研究</InternType>
          <InternDetail>
            {["人間とロボットの多人数会話におけるロボットの会話システムについて生成AIを用いて研究中",
              "人間1人とロボット2体 or 人間2人とロボット1体の三者会話において、ロボットが3人の仲の良さを考慮しながら会話ができるようにする会話システムを開発",
              "国内学会発表"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/Technium.png`} alt="technium"></InternImg>
        </div>
        <div>
          <InternCompany>テクニウム株式会社（2023年4月〜現在）</InternCompany>
          <InternType>長期インターンシップ</InternType>
          <InternDetail>
            {["企業のプロモーションサイトの開発を担当。特にランディングページおよびその派生ページの制作にチームで取り組んでいる",
              "RPAとExcelのマクロを組み合わせた業務自動化システムの開発を担当"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/NRI.jpg`} alt="nri"></InternImg>
        </div>
        <div>
          <InternCompany>野村総合研究所（2weeks）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {["ReactやAWS、生成AI（RAG）を用いてAIチャットボットをチーム開発",
              "音声認識、音声合成を用いることで、AI電話も可能に！",
              "施策立案から設計、開発まで一気通貫で実施"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/NTTData.jpg`} alt="nttdata"></InternImg>
        </div>
        <div>
          <InternCompany>株式会社NTT DATA（5days）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {[""]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/hitachi.jpg`} alt="hitachi"></InternImg>
        </div>
        <div>
          <InternCompany>株式会社 日立製作所（2weeks）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {["設計書の品質チェックを生成AIによって自動化",
              "RAGだけでなく、GraphRAGという最新技術を用いた検証も実施",
              "80%のチェックリストをAIがチェック可能に"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/accenture.png`} alt="accenture"></InternImg>
        </div>
        <div>
          <InternCompany>アクセンチュア株式会社（5days）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {[""]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/MUFG.jpg`} alt="MUFG"></InternImg>
        </div>
        <div>
          <InternCompany>三菱UFJ銀行（3days）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {["システムデジタルコースに参加",
              "新規事業立案ワークを実施", 
              "企画、設計、体制検討をチームでおこなった"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src={`${process.env.PUBLIC_URL}/img/AWS.jpg`} alt="AWS"></InternImg>
        </div>
        <div>
          <InternCompany>アマゾン ウェブ サービス ジャパン株式会社（1day）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {[""]}
          </InternDetail>
        </div>
      </Intern>
    </Layout>
  )
}
