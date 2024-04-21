import { FC, useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment";
import {
  WrapperContainer,
  TextContainer,
  TextTitle,
  TextWrapper,
  TextSubTitle,
  DateContainer,
  DateTitle,
  PlaceSubTitle,
  PlaceContainer,
  DateSubTitle,
} from "./style";

const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Wrapper: FC = () => {
  const [diffSeconds, setDiffSeconds] = useState<number | null>(null);

  const end = useMemo(() => {
    return moment("2024-07-19 10:30:00");
  }, []);

  const getTime = useCallback(() => {
    const now = moment(new Date());
    setDiffSeconds(end.diff(now, "seconds"));
  }, [end]);

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <WrapperContainer>
      <TextWrapper>
        <TextContainer>
          <TextSubTitle>
            Приглашаем Вас на торжество, посвященное нашему благосочетанию!
          </TextSubTitle>
        </TextContainer>
        <TextContainer>
          <TextTitle>Алексей & Ксения</TextTitle>
        </TextContainer>
        <DateContainer>
          <DateTitle>пятница</DateTitle>
          <DateTitle>19</DateTitle>
          <DateTitle>июля</DateTitle>
          <DateTitle>2024</DateTitle>
        </DateContainer>
        <PlaceContainer>
          <TextContainer>
            <TextSubTitle>10:30 - Регистрация</TextSubTitle>
            <PlaceSubTitle>ул. Волжская, 22</PlaceSubTitle>
          </TextContainer>
          <TextContainer>
            <TextSubTitle>15:00 - Ресторан "Самарканд"</TextSubTitle>
            <PlaceSubTitle>1-й Танкистов проезд, 214</PlaceSubTitle>
          </TextContainer>
        </PlaceContainer>
        {diffSeconds && (
          <DateContainer>
            <DateTitle>
              <DateSubTitle>{Math.floor(diffSeconds / DAY)}</DateSubTitle>
              <DateSubTitle>дней</DateSubTitle>
            </DateTitle>
            <DateTitle>
              <DateSubTitle>
                {Math.floor((diffSeconds / HOUR) % 24)}
              </DateSubTitle>
              <DateSubTitle>часов</DateSubTitle>
            </DateTitle>
            <DateTitle>
              <DateSubTitle>
                {Math.floor((diffSeconds / MINUTE) % 60)}
              </DateSubTitle>
              <DateSubTitle>минут</DateSubTitle>
            </DateTitle>
            <DateTitle>
              <DateSubTitle>
                {Math.floor((diffSeconds / SECOND) % 60)}
              </DateSubTitle>
              <DateSubTitle>секунд</DateSubTitle>
            </DateTitle>
          </DateContainer>
        )}
      </TextWrapper>
    </WrapperContainer>
  );
};

export { Wrapper };
