import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #969696;
  font-size: 14px;
  .change {
    cursor: pointer;
  }
`;

export const WriterList = styled.div`
  margin: 0 0 20px;
`;
export const WriterItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    display: block;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`;
export const WriterInfo = styled.div`
  display: inline-block;
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .info {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;
export const AllWriter = styled.div`
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  box-sizing: border-box;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
export const NoMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  line-height: 40px;
  text-align: center;
  color: #999;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`;

