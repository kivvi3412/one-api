// // 最初的
// // const BaseIndex = () => (
// //   <Box
// //     sx={{
// //       minHeight: 'calc(100vh - 136px)',
// //       backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)',
// //       color: 'white',
// //       p: 4
// //     }}
// //   >
// //     <Container maxWidth="lg">
// //       <Grid container columns={12} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 230px)' }}>
// //         <Grid md={7} lg={6}>
// //           <Stack spacing={3}>
// //             <Typography variant="h1" sx={{ fontSize: '4rem', color: '#fff', lineHeight: 1.5 }}>
// //               ChatAPI
// //             </Typography>
// //             <Grid container alignItems="center" spacing={2}>
// //               <Grid item xs={8}>
// //                 <Typography variant="h4" sx={{ fontSize: '1.5rem', color: '#fff', lineHeight: 1.5 }}>
// //                   整合各种大语言模型 <br />
// //                   注册即使用 <br />
// //                   高速稳定，国内线路优化
// //                 </Typography>
// //               </Grid>
// //               <Grid item xs={4}>
// //                 <Stack spacing={2}>
// //                   <Button
// //                     variant="contained"
// //                     startIcon={<Login />}
// //                     href="http://localhost:3001/panel/chat"
// //                     target="_blank"
// //                     sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
// //                   >
// //                     开始聊天
// //                   </Button>
// //                   <Button
// //                     variant="contained"
// //                     startIcon={<Login />}
// //                     href="https://www.chatapi.org/about"
// //                     target="_blank"
// //                     sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
// //                   >
// //                     价格/教程
// //                   </Button>
// //                 </Stack>
// //               </Grid>
// //             </Grid>
// //           </Stack>
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   </Box>
// // );
//
// export default BaseIndex;
import { Box, Container, Grid, Stack, Typography, Button, Card } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DescriptionIcon from '@mui/icons-material/Description';

const BaseIndex = () => (
  <Box
    sx={{
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(to right, #FFFFFF, #F6F6F5)',
      color: '#000',
    }}
  >
    <Container maxWidth="lg">
      <Grid container columns={12} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 64px)' }}>
        <Grid item xs={12}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h1" sx={{ fontSize: '3.5rem', color: '#000', lineHeight: 1.2, fontWeight: 'bold', textAlign: 'center' }}>
              ChatAPI
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.5, textAlign: 'center' }}>
              为用户提供"性价比高"、"使用方便"、"稳定可靠"的AI服务，让AI技术惠及每一个人
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                href="https://www.chatapi.org/panel/chat"
                target="_blank"
                sx={{ backgroundColor: '#3776F6', color: '#fff', px: 4, py: 1, fontSize: '1rem' }}
              >
                开始聊天
              </Button>
              <Button
                variant="outlined"
                href="https://www.chatapi.org/about"
                target="_blank"
                sx={{ color: '#3776F6', borderColor: '#3776F6', px: 4, py: 1, fontSize: '1rem' }}
              >
                价格/教程
              </Button>
            </Stack>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, backgroundColor: '#FFFFFF' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1.3rem' }}>
                    精选模型系列
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '1.0rem' }}>
                    OpenAI,Claude-3 等系列, 如:gpt-4o,claude-3-5-sonnet等最强大模型，开箱即用
                    <a href="https://rcn512acvok6.feishu.cn/wiki/VAW7wNOJmiloSWkF8WIcZzXzngh#Pm2pd5veLoxRxrxhEUNcxEy0nbf" target="_blank" rel="noreferrer">
                      LLM模型价格对比>
                    </a>
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, backgroundColor: '#FFFFFF' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1.3rem' }}>
                    价格透明公开
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '1.0rem' }}>
                    后台计费同步官方,实时查看每一次请求记录, 充多少用多少, 无充值门槛限制
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, backgroundColor: '#FFFFFF' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1.3rem' }}>
                    安全稳定高效
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '1.0rem' }}>
                    企业级服务器, 速度快、高稳定、多模型聚合一键支持, 告别重复开发, 无封号安全风险; 专业团队随时待命, 为您接入保驾护航
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>

    <Box sx={{ backgroundColor: '#F2F6FA', py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" sx={{ fontSize: '2.5rem', color: '#3874CB', lineHeight: 1.2, fontWeight: 'bold', textAlign: 'center' }}>
            API的用途
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.5, textAlign: 'center', maxWidth: '800px' }}>
            API Key相对于对话类应用来说可扩展性很强，可以用在不同的客户端调用或者集成在您的应用里等。
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <TranslateIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '用于翻译', description: '与传统的翻译方法相比，基于AI的机器翻译具有更高的准确率和更快的翻译速度。' },
              { icon: <EditNoteIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '辅助写作', description: '相比于传统的人工创作，AI写作生成可以快速产生大量的文本内容，并且质量稳定。' },
              { icon: <CodeIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '代码顾问', description: '不仅能够大大减少写代码工作量,还能够提高代码的可读性和可维护性,让您更加专注于算法和业务逻辑的实现。' },
              { icon: <DevicesIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '多客户端支持', description: '对市面上支持自定义API的应用全面兼容，应用涵盖各大系统平台。本站也将提供下载导航和使用教程。' },
              { icon: <SmartToyIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '自定义助手', description: '通过对模型设定Prompt提示词或直接使用GPTs让AI变成您想要的专业领域的助手。' },
              { icon: <DescriptionIcon sx={{ fontSize: 40, color: '#3874CB' }} />, title: '文档理解', description: '通过gpt-4-vision-preview等支持多模态的AI模型可对图片进行理解，以及通过gpts等应用可对文档进行阅读和理解。' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, backgroundColor: '#FFFFFF' }}>
                  {item.icon}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2, fontSize: '1.3rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '1rem' }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default BaseIndex;