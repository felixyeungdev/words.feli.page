import React, { useState, useEffect } from "react";
import "./App.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import WordsAPI from "./wordsAPI";

function App() {
    const [isLoading, setIsLoading] = useState(() => false);
    const [currentWord, setCurrentWord] = useState(() => "");
    const [definition, setDefinition] = useState(null);
    function handleSubmit(e) {
        e.preventDefault();
        setCurrentWord(e.target.word.value);
    }

    useEffect(() => {
        if (!currentWord) return;
        console.log(`New word ${currentWord}`);
        (async () => {
            setIsLoading(true);
            const result = await WordsAPI.getWord(currentWord);
            setIsLoading(false);
            setDefinition(result);
        })();
    }, [currentWord]);

    return (
        <>
            <CssBaseline></CssBaseline>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6">Words</Typography>
                </Toolbar>
            </AppBar>
            {isLoading ? (
                <LinearProgress></LinearProgress>
            ) : (
                <div style={{ height: "4px" }}></div>
            )}
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ marginTop: "16px" }}
            >
                <Card
                    width="100%"
                    style={{
                        minWidth: "350px",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <CardContent>
                            <TextField
                                id="word"
                                label="Word"
                                variant="filled"
                                fullWidth
                                required
                                disabled={isLoading}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                style={{
                                    marginTop: "16px",
                                }}
                                disabled={isLoading}
                            >
                                Define
                            </Button>
                        </CardActions>
                    </form>
                </Card>
                {definition ? (
                    <Card style={{ marginTop: "16px", marginBottom: "16px" }}>
                        <CardContent>
                            <Typography variant="body1">
                                <pre
                                    style={{
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {JSON.stringify(definition, null, 4)}
                                </pre>
                            </Typography>
                        </CardContent>
                    </Card>
                ) : (
                    ""
                )}
            </Grid>
        </>
    );
}

export default App;
