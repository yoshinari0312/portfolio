import { Layout } from "../common/Layout"
import { TitleHeader } from "../common/TitleHeader"
import { WorkCard } from "./WorkCard"
import { WorkLayout } from "./WorkLayout"
import { WorkImg } from "./WorkImg"
import { WorkType } from "./WorkType"
import { WorkDetail } from "./WorkDetail"
import { CardActions, CardContent } from "@mui/material"
import { WorkTitle } from "./WorkTitle"
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import { WorkIconButton } from "./WorkIconButton"

export const Works = () => {
  return (
    <Layout id="works">
      <TitleHeader>Works</TitleHeader>
      <WorkLayout>
        <WorkCard>
          <WorkImg image={`${process.env.PUBLIC_URL}/img/RelBot.jpg`} alt="RelBot"/>
          <CardContent sx={{px:2, pt:1, pb:0}}>
            <WorkTitle>ロボット会話システム</WorkTitle>
            <WorkType>研究</WorkType>
            <WorkDetail>
              {["Python, Java, JavaScript, OpenAI API, Flask, Pepperくんなどを使用",
                "三者関係を理解しながら会話できるロボットのための会話システム",
                "会話内容から関係性を推定し、より良い関係性にするための発言を生成",
                "2つの学会で発表"]}
            </WorkDetail>
          </CardContent>
          <CardActions sx={{display:"flex", flexDirection:"column", p:0, mt:1}}>
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <WorkIconButton href="https://github.com/imai-laboratory/RelBot" char="git1">
                {<GitHubIcon sx={{fontSize:30}}/>}
              </WorkIconButton>
              <WorkIconButton href="https://github.com/imai-laboratory/RelBot_robot" char="git2" color="blue">
                {<GitHubIcon sx={{fontSize:30, color:"blue"}}/>}
              </WorkIconButton>
              <WorkIconButton href="https://drive.google.com/file/d/1K0TXZoEQMOhMHX8WOtRG4Gr-nZS3MuN6/view?usp=sharing" char="参考動画" color="black">
                {<SlideshowIcon sx={{fontSize:30, color:"black"}}/>}
              </WorkIconButton>
            </div>
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <WorkIconButton href="https://drive.google.com/file/d/1ADWFIZZhZ5q8ZtaCm0-9gggM7qaI92ST/view" char="論文1" color="green">
                {<ArticleIcon sx={{fontSize:30, color:"green"}}/>}
              </WorkIconButton>
              <WorkIconButton href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_3T1OS6a03/_pdf/-char/ja" char="論文2" color="darkgreen">
                {<ArticleIcon sx={{fontSize:30, color:"darkgreen"}}/>}
              </WorkIconButton>
            </div>
          </CardActions>
        </WorkCard>
        <WorkCard>
          <WorkImg image={`${process.env.PUBLIC_URL}/img/Skillup.jpg`} alt="AWS"/>
          <CardContent>
            <WorkTitle>AWS</WorkTitle>
            <WorkType>研究</WorkType>
            <WorkDetail>
              {["Python, Java, JavaScript, OpenAI API, Pepperくんなどを使用",
                "三者関係を理解しながら会話できるロボットのための会話システム",
                "ロボットは三者関係をより良い関係性にする発言が可能に",
                "2つの学会で発表"]}
            </WorkDetail>
          </CardContent>
        </WorkCard>
        <WorkCard>
          <WorkImg image={`${process.env.PUBLIC_URL}/img/AWS.jpg`} alt="AWS"/>
          <CardContent>
            <WorkTitle>AWS</WorkTitle>
            <WorkType>研究</WorkType>
            <WorkDetail>
              {["Python, Java, JavaScript, OpenAI API, Pepperくんなどを使用",
                "三者関係を理解しながら会話できるロボットのための会話システム",
                "ロボットは三者関係をより良い関係性にする発言が可能に",
                "2つの学会で発表"]}
            </WorkDetail>
          </CardContent>
        </WorkCard>
      </WorkLayout>
    </Layout>
  )
}
