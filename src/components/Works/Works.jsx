import { Layout } from "../common/Layout"
import { TitleHeader } from "../common/TitleHeader"
import { WorkCard } from "./WorkCard"
import { WorkLayout } from "./WorkLayout"
import { WorkImg } from "./WorkImg"
import { WorkType } from "./WorkType"
import { WorkDetail } from "./WorkDetail"
import { Box, CardActions, CardContent } from "@mui/material"
import { WorkTitle } from "./WorkTitle"
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import { WorkIconButton } from "./WorkIconButton"
import LanguageIcon from '@mui/icons-material/Language';

export const Works = () => {
  const colors = {
    git2: "blue",
    video: "black",
    paper1: "#00BB00",
    paper2: "#008000",
    paper3: "#004400"
  };

  // ベースパスを定義
  const baseImageUrl = `${process.env.PUBLIC_URL}/img/WorkImages`;

  // WorkCard のデータリスト
  const worksData = [
    {
      img: `${baseImageUrl}/RelBot.jpg`,
      title: "関係性を考慮して会話できるロボット",
      type: "研究",
      details: [
        "使用言語：Python、Java、JavaScript",
        "主要技術：生成AI、音声認識、Flask、Pepperロボット、ソケット通信",
        "体制：1人",
        "詳細：三者関係を理解しながら会話できるロボットを開発した。会話内容から関係性を推定し、より良い関係性にするための発言を生成できる。90%以上の精度で関係性を推定でき、発言によって良好な関係性を築くことができた。3つの学会に投稿し、2つの学会で発表した。"
      ],
      actions: [
        { href: "https://github.com/imai-laboratory/RelBot", icon: <GitHubIcon sx={{ fontSize: 30 }} />, label: "Git1" },
        { href: "https://github.com/imai-laboratory/RelBot_robot", icon: <GitHubIcon sx={{ fontSize: 30, color: colors.git2 }} />, label: "Git2", color: colors.git2 },
        { href: "https://drive.google.com/file/d/1K0TXZoEQMOhMHX8WOtRG4Gr-nZS3MuN6/view?usp=sharing", icon: <SlideshowIcon sx={{ fontSize: 30, color: colors.video }} />, label: "参考動画", color: colors.video },
        { href: "https://drive.google.com/file/d/1u9thX14ly2NZG8s5Qs1_sDKnXal8-TIK/view?usp=sharing", icon: <ArticleIcon sx={{ fontSize: 30, color: colors.paper1 }} />, label: "論文1", color: colors.paper1 },
        { href: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_3T1OS6a03/_pdf/-char/ja", icon: <ArticleIcon sx={{ fontSize: 30, color: colors.paper2 }} />, label: "論文2", color: colors.paper2 },
        { href: "https://drive.google.com/file/d/1ADWFIZZhZ5q8ZtaCm0-9gggM7qaI92ST/view", icon: <ArticleIcon sx={{ fontSize: 30, color: colors.paper3 }} />, label: "論文3", color: colors.paper3 }
      ]
    },
    {
      img: `${baseImageUrl}/Skillup.jpg`,
      title: "企業のプロモーションサイト",
      type: "長期インターンシップ",
      details: [
        "使用言語：JavaScript、HTML、CSS",
        "主要技術：JQuery、RCMS",
        "体制：インターン生4人（デザイン2人、開発2人）",
        "詳細：デザイン、開発、保守運用まで一気通貫で担当。新たなページの作成から既存ページの改良までを顧客目線を意識しながら行った。シンプルで使いやすいサイトの実現により、問い合わせ数の削減と、申し込み増加に貢献した。以下のサイトから遷移できるほぼ全ページを担当。"
      ],
      actions: [
        { href: "https://www.technium.net/school/", icon: <LanguageIcon sx={{ fontSize: 30, color: colors.video }} />, label: "サイト", color: colors.video }
      ]
    },
    {
      img: `${baseImageUrl}/Automate.jpg`,
      title: "社内業務の効率化システム",
      type: "長期インターンシップ",
      details: [
        "使用言語：VBA",
        "主要技術：Power Automate、Power AppsなどのRPAツール",
        "体制：1人（社員と協力）",
        "詳細：社員が毎日手動でデータの整理を行なっているのを見て、自動化システムの開発を自ら提案。Excelのマクロを組み、それをRPAツールに組み込むことで、業務の効率化を実現した。顧客情報の整理分析システムや自動メール送信システム、インターン生のシフト管理システムなど、10を超える自動化システムを開発した。画像はシフト管理システムの一部である。"
      ]
    },
    {
      img: `${baseImageUrl}/interactiveSmartClerk.jpg`,
      title: "服推薦ロボット",
      type: "研究",
      details: [
        "使用言語：Python、Java、JavaScript",
        "主要技術：生成AI、音声認識、Flask、Temiロボット、ソケット通信、機械学習",
        "体制：3人",
        "詳細：服をいくつか見せて機械学習によって人間の好みを把握し、おすすめの服を案内してくれるロボット。私は生成AIを用いたロボットの会話や移動、音声認識部分を担当した。"
      ],
      actions: [
        { href: "https://github.com/yoshinari0312/Temi_clothes_recommendation", icon: <GitHubIcon sx={{ fontSize: 30 }} />, label: "Git" },
        { href: "https://drive.google.com/file/d/1dF9bhQy-eiwXWx12ee8mp5FrHi-CrYkR/view?usp=sharing", icon: <SlideshowIcon sx={{ fontSize: 30, color: colors.video }} />, label: "参考動画", color: colors.video }
      ]
    },
    {
      img: `${baseImageUrl}/AIChatBot.png`,
      title: "AIチャットボット",
      type: "サマーインターンシップ",
      details: [
        "使用言語：Python、JavaScript",
        "主要技術：AWS、生成AI、RAG、React、音声認識、音声合成、非同期通信、サーバーレス",
        "体制：4人",
        "詳細：コールセンターの業務削減のためのAIチャットボットを開発。RAGを用いることで、個人情報と対応マニュアルを参照し、適切な回答を自然言語で生成できる。音声認識や音声合成を搭載し、リアルタイムAI電話対応も可能にすることで問い合わせしてくることが多い高齢者への対応。私はフロントエンドと音声認識・合成を担当した。"
      ]
    },
    {
      img: `${baseImageUrl}/FintechApp.png`,
      title: "銀行&家計簿Androidアプリ",
      type: "サマーインターンシップ",
      details: [
        "使用言語：Java、XML",
        "主要技術：Android Studio",
        "体制：5人",
        "詳細：銀行アプリと家計簿アプリを組み合わせた機能を持つAndroidアプリをアジャイルで開発。指定した期間の利用明細だけでなく、収入と支出のそれぞれの内訳を円グラフで表示可能。私はグラフ全般を担当し、色使いにこだわった。"
      ]
    },
    {
      img: `${baseImageUrl}/documentReview.jpg`,
      title: "設計書のレビューを生成AIで自動化",
      type: "サマーインターンシップ",
      details: [
        "使用言語：Python",
        "主要技術：生成AI、RAG、GraphRAG",
        "体制：1人",
        "詳細：基本設計書がチェックリストに準拠しているかを生成AIによって自動チェックするシステム。RAGだけでなく、GraphRAGという最新技術を用いた検証も実施した。最終的に、SEがレビューしたものとの整合率は約90%と高い精度で判定できた"
      ]
    },
    {
      img: `${baseImageUrl}/portfolio.jpg`,
      title: "ポートフォリオ（本サイト）",
      type: "個人開発",
      details: [
        "使用言語：JavaScript",
        "主要技術：React",
        "体制：1人",
        "詳細：HTMLでも良かったが、学習を兼ねてReactで開発。コンポーネント構成にこだわった。GitHub Pagesを使ってデプロイ。"
      ],
      actions: [
        { href: "https://github.com/yoshinari0312/portfolio", icon: <GitHubIcon sx={{ fontSize: 30 }} />, label: "Git" }
      ]
    }
  ];
  

  return (
    <Layout id="works">
      <TitleHeader>Works</TitleHeader>
      <WorkLayout>
        {worksData.map((work, index) => (
          <WorkCard key={index}>
            <WorkImg image={work.img} alt={work.title} />
            <CardContent sx={{ px: 2, pt: 1, pb: 0 }}>
              <WorkTitle>{work.title}</WorkTitle>
              <WorkType>{work.type}</WorkType>
              <WorkDetail>{work.details}</WorkDetail>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "column", p: 0, mt: 1 }}>
              {work.actions &&
                work.actions
                  .reduce((acc, curr, idx) => {
                    // 3つずつのグループに分割
                    if (idx % 3 === 0) acc.push([]);
                    acc[acc.length - 1].push(curr);
                    return acc;
                  }, [])
                  .map((actionGroup, groupIdx) => (
                    <Box key={groupIdx} sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                      {actionGroup.map((action, actionIdx) => (
                        <WorkIconButton
                          key={`${groupIdx}-${actionIdx}`}
                          href={action.href}
                          char={action.label}
                          color={action.color}
                        >
                          {action.icon}
                        </WorkIconButton>
                      ))}
                    </Box>
                  ))}
            </CardActions>
          </WorkCard>
        ))}
      </WorkLayout>
    </Layout>
  );
};
