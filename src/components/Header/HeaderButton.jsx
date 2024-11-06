import { Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export const HeaderButton = ({ href, children }) => {
  return (
    <div>
      <ScrollLink
        to={href}
        smooth={true} // スムーズスクロール
        offset={-70} // ヘッダーの高さ分オフセットを調整
        duration={1000} // スクロール時間（ms）
      >
        <Button key={children} sx={{ color: '#fff', fontSize: '16px' }}>
          {children}
        </Button>
      </ScrollLink>
    </div>
  );
};
