import React, { useEffect } from "react";
import { useState } from "react";
import { ParagraphCard, ParagraphWrapperCard, WindowCard, WrapperCard } from "../../components/Wrapper";
import { ParagraphEditCard } from "../../components/Wrapper";
import { InputCard } from "../../components/AuthComponents";
import { TitleCard } from "../../components/Wrapper";
import { InputTitleCard } from "../../components/Wrapper";
// create large one
const paragraph = [
    'in the beginning god created the heavens and the earth. the earth was without form and void, and darkness was over the face of the deep. and the spirit of god was hovering over the face of the waters. and god said, “let there be light,” and there was light. and god saw that the light was good. and god separated the light from the darkness. god called the light day, and the darkness he called night. and there was evening and there was morning, the first day.',
    'and god said, “let there be an expanse in the midst of the waters, and let it separate the waters from the waters.” and god made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. and it was so. and god called the expanse heaven. and there was evening and there was morning, the second day.',
    'and god said, “let the waters under the heavens be gathered together into one place, and let the dry land appear.” and it was so. god called the dry land earth, and the waters that were gathered together he called seas. and god saw that it was good. and god said, “let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth.” and it was so. the earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. and god saw that it was good. and there was evening and there was morning, the third day.',
    'and god said, “let there be lights in the expanse of the heavens to separate the day from the night. and let them be for signs and for seasons, and for days and years, and let them be lights in the expanse of the heavens to give light upon the earth.” and it was so. and god made the two great lights—the greater light to rule the day and the lesser light to rule the night—and the stars. and god set them in the expanse of the heavens to give light on the earth, to rule over the day and over the night, and to separate the light from the darkness. and god saw that it was good. and there was evening and there was morning, the fourth day.',
    'and god said, “let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens.” so god created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. and god saw that it was good. and god blessed them, saying, “be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth.” and there was evening and there was morning, the fifth day.',
    'and god said, “let the earth bring forth living creatures according to their kinds—livestock and creeping things and beasts of the earth according to their kinds.” and it was so. and god made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. and god saw that it was good.'
]

function WriteBlog(): React.ReactNode {
    const [title, setTitle] = useState('');
    const [paragraphs, setParagraphs] = useState<{ [id: string]: string }>({});
    const [currentParagraph, setCurrentParagraph] = useState<string>('');
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState<string>('1');

    useEffect(() => {
        // set the paragraph dict with the paragraph array
        let p: { [id: string]: string } = {};
        paragraph.forEach((text, i) => {
            p[i.toString()] = text;
        });
        setParagraphs(p);
    }, []);

    function handleParagraphChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrentParagraph(e.target.value);
    }

    function saveParagraph(id: string) {
        let p = { ...paragraphs };
        p[id] = currentParagraph;
        setParagraphs(p);
        setCurrentParagraph('');
        setCurrentParagraphIndex('1');
    }

    function renderParagraphCard(text: string, id: string): React.ReactNode {
        return (
            <ParagraphCard key={id} >
                <p onClick={() => editParagraphCard(text, id)}>{text}</p>

            </ParagraphCard>
        );
    }

    function editParagraphCard(text: string, id: string) {
        setCurrentParagraph(text);
        setCurrentParagraphIndex(id);
    }


    // if currsor click below the last paragraph add a new paragraph

    function addParagraph() {
        const id = (Object.keys(paragraphs).length + 1).toString();
        let p = { ...paragraphs };
        p[id] = '';
        setParagraphs(p);
        setCurrentParagraph('');
        setCurrentParagraphIndex(id);
    }






    return (
        <WindowCard>
            <WrapperCard>



                <TitleCard>
                    <div className="justify-center m-2  col-span-1">

                        <div className="text-2xl font-bold text-center">Write Blog</div>

                        <InputTitleCard label="Title" placeholder="Title" name="title" type="text" value={title} setValue={setTitle} />


                        {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />*/}


                    </div>

                </TitleCard>


                <ParagraphWrapperCard>



                    {Object.keys(paragraphs).map((id) => {
                        if (id === currentParagraphIndex) {
                            // calculate height of textarea
                            // width = 4/5 of the parent


                            // const height:string = currentParagraph.split(' ').length * 1.5 + 'rem';

                            // use scroll height of text area
                            const height = document.getElementById('textarea')?.scrollHeight;
                            // set width to 4/5 of the parent


                            return (
                                <ParagraphEditCard key={id}>
                                    <textarea
                                        id="textarea"
                                        className="w-full overflow-y-auto p-4"
                                        style={{ height: height }}
                                        value={currentParagraph}
                                        onChange={handleParagraphChange}
                                    ></textarea>

                                    <button onClick={() => saveParagraph(id)}>Save</button>
                                </ParagraphEditCard>
                            );
                        } else {
                            return renderParagraphCard(paragraphs[id], id);
                        }
                    })}
                </ParagraphWrapperCard>
            </WrapperCard>
        </WindowCard>
    );
}

export default WriteBlog;
