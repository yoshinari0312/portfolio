import "./Internship.css";
import { Layout } from "../common/Layout";
import { TitleHeader } from "../common/TitleHeader";
import { Intern } from "./Intern";
import { InternCompany } from "./InternCompany";
import { InternDetail } from "./InternDetail";
import { InternImg } from "./InternImg";
import { InternType } from "./InternType";
import { InternContent } from "./InternContent";

export const Internship = () => {
  // ベースパスを定義
  const baseImageUrl = `${process.env.PUBLIC_URL}/img/InternImages`;

  // インターン情報をリストで管理
  const internData = [
    {
      imgSrc: `${baseImageUrl}/imaiLogo.png`,
      alt: "imaiLogo",
      company: "今井倫太研究室（2023年2月〜現在）",
      type: "研究",
      details: [
        "人間とロボットの多人数会話におけるロボットの会話システムについて生成AIを用いて研究中",
        "人間1人とロボット2体 or 人間2人とロボット1体の三者会話において、ロボットが3人の仲の良さを考慮しながら会話ができるようにする会話システムを開発",
        "国内学会発表"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/Technium.png`,
      alt: "technium",
      company: "テクニウム株式会社（2023年4月〜現在）",
      type: "長期インターンシップ",
      details: [
        "企業のプロモーションサイトのデザイン・開発を担当。特にランディングページおよびその派生ページの制作にチームで取り組んでいる",
        "RPAとExcelのマクロを組み合わせた業務自動化システムの開発を担当"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/NRI.jpg`,
      alt: "nri",
      company: "株式会社 野村総合研究所（2weeks）",
      type: "サマーインターンシップ",
      details: [
        "ReactやAWS、生成AI（RAG）を用いてAIチャットボットをチーム開発",
        "音声認識、音声合成を用いることで、AI電話も可能に！",
        "施策立案から設計、開発まで一気通貫で実施"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/hitachi.jpg`,
      alt: "hitachi",
      company: "株式会社 日立製作所（2weeks）",
      type: "サマーインターンシップ",
      details: [
        "設計書の品質チェックを生成AIによって自動化",
        "RAGだけでなく、GraphRAGという最新技術を用いた検証も実施",
        "80%のチェックリストをAIがチェック可能に"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/NTTData.jpg`,
      alt: "nttdata",
      company: "株式会社 NTTデータ（5days）",
      type: "サマーインターンシップ",
      details: [
        "大手銀行向けのCXデザイン提案ワーク",
        "ローコード体験"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/accenture.png`,
      alt: "accenture",
      company: "アクセンチュア株式会社（5days）",
      type: "サマーインターンシップ",
      details: [
        "「架空のECサイトの需要予測とオペレーション戦略策定」をテーマとしたハッカソン",
        "JavaScriptでオペレーションを実現するための開発を担当",
        "優勝"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/MUFG.jpg`,
      alt: "MUFG",
      company: "株式会社 三菱UFJ銀行（3days）",
      type: "サマーインターンシップ",
      details: [
        "システムデジタルコースに参加",
        "新規事業立案ワークを実施",
        "企画、設計、体制検討をチームでおこなった"
      ]
    },

    {
      imgSrc: `${baseImageUrl}/JRI.png`,
      alt: "jri",
      company: "株式会社 日本総合研究所（2days）",
      type: "サマーインターンシップ",
      details: [
        "銀行アプリの機能と家計簿アプリの機能を組み合わせたAndroidアプリの開発",
        "アジャイル開発を経験"
      ]
    },
    {
      imgSrc: `${baseImageUrl}/AWS.jpg`,
      alt: "AWS",
      company: "アマゾン ウェブ サービス ジャパン株式会社（1day）",
      type: "サマーインターンシップ",
      details: [
        "AWSのサービスを活用したハンズオンワーク"
      ]
    }
  ];

  return (
    <Layout id="internship">
      <TitleHeader>Affiliation / Internship</TitleHeader>
      {internData.map((intern, index) => (
        <Intern key={index}>
          <div>
            <InternImg src={intern.imgSrc} alt={intern.alt} />
          </div>
          <InternContent>
            <InternCompany>{intern.company}</InternCompany>
            <InternType>{intern.type}</InternType>
            <InternDetail>
              {intern.details}
            </InternDetail>
          </InternContent>
        </Intern>
      ))}
    </Layout>
  );
};
