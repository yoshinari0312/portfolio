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
          <InternImg src="../img/imaiLogo.JPG" alt="imaiLogo"></InternImg>
        </div>
        <div>
          <InternCompany>今井倫太研究室（2023年2月〜現在）</InternCompany>
          <InternType>研究</InternType>
          <InternDetail>
            {["人間とロボットの多人数会話におけるロボットの会話システムについて生成AIを用いて研究中",
              "人間1人とロボット2体 or 人間2人とロボット1体の3人での会話で、ロボットが3人の仲の良さを考慮しながら会話ができるようにする会話システムを生成AIを活用して開発",
              "国内学会発表"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src="../img/Technium.png" alt="technium"></InternImg>
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
          <InternImg src="../img/NRI.jpg" alt="nri"></InternImg>
        </div>
        <div>
          <InternCompany>野村総合研究所（2weeks）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {["ReactとAWSを用いて〜を開発"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src="../img/NTTData.jpg" alt="nttdata"></InternImg>
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
          <InternImg src="../img/hitachi.avif" alt="hitachi"></InternImg>
        </div>
        <div>
          <InternCompany>株式会社 日立製作所（2weeks）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {[""]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src="../img/accenture.png" alt="accenture"></InternImg>
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
          <InternImg src="../img/NSSOL.png" alt="NSSOL"></InternImg>
        </div>
        <div>
          <InternCompany>日鉄ソリューションズ株式会社（5days）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {[""]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src="../img/MUFG.JPG" alt="MUFG"></InternImg>
        </div>
        <div>
          <InternCompany>三菱UFJ銀行（3days）</InternCompany>
          <InternType>サマーインターンシップ</InternType>
          <InternDetail>
            {["新規事業立案ワークを実施", "企画、設計、体制検討をチームでおこなった"]}
          </InternDetail>
        </div>
      </Intern>
      <Intern>
        <div>
          <InternImg src="../img/AWS.JPG" alt="AWS"></InternImg>
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
