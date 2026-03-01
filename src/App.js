import styled, { ThemeProvider } from "styled-components/native";
import Button from "./components/Buttons";
import Input from "./components/Input";
import { theme, lightTheme, darkTheme } from "./theme";
import { Switch } from "react-native";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
`;

// 라이트, 다크 테마 적용
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _togleSwitch = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_togleSwitch} />
        <Button title="Hanbit" />
        <Button title="React Native" />
        <Input borderColor={theme.blue} />
        <Input borderColor={theme.purple} />
      </Container>
    </ThemeProvider>
  );
};

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Button title="Hanbit" />
//         <Button title="React Native" />
//         <Input borderColor={theme.blue} />
//         <Input borderColor={theme.purple} />
//       </Container>
//     </ThemeProvider>
//   );
// };

export default App;
