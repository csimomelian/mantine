import './App.css';
import { Button, createStyles, MantineProvider, useMantineTheme, Box, Paper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.other.colorPrimary,
    '&&:hover': {
      backgroundColor: `${theme.colors.yellow[8]}`,
    }
  }
}));

function App() {
  const { classes } = useStyles();
  const th = useMantineTheme();

  return (
    <div className="App">
      {/* // Si queremos customizar el root del componente de mantine se usa sx */}
      <Box sx={(theme) => ({
        padding: theme.spacing.md
      })}>
        <Button sx={(theme) => ({
          color: '#ffffff',
          border: 0,
          backgroundColor: theme.other.colorPrimary,
          '&&:hover': {
            backgroundColor: `${theme.colors.yellow[8]}`,
          }

        })} >SX</Button>
      </Box>
      {/* // Si queremos customizar componentes de mantine se recomienda usar styles o classnames */}
      <Box sx={(theme) => ({
        padding: theme.spacing.md
      })}>
        <Button classNames={{ root: classes.button }}>createStyle</Button>
      </Box>
      <Box sx={(theme) => ({
        padding: theme.spacing.md
      })}>
        <Button styles={{
          root: {
            backgroundColor: th.other.colorPrimary,
            '&&:hover': {
              backgroundColor: `${th.colors.yellow[8]}`,
            }
          }
        }}>styles</Button>
      </Box>
      {/* // Tambien se puede customizar un componente de mantine con el style provider */}
      <Paper sx={(theme) => ({
        padding: theme.spacing.md
      })}>
        <MantineProvider
          theme={th}
          styles={{
            Button: (theme) => ({
              root: {
                backgroundColor: theme.other.colorPrimary,
                '&&:hover': {
                  backgroundColor: `${theme.colors.yellow[8]}`,
                }
              }
            })
          }}>
          <Button>Style provider</Button>
        </MantineProvider>
      </Paper >
    </div>
  );
}

export default App;
