import React from "react";
import { useState } from "react";
import { ParagraphCard, ParagraphWrapperCard, WindowCard, WrapperCard } from "../../components/Wrapper";
import { ParagraphEditCard } from "../../components/Wrapper";
import { TitleCard } from "../../components/Wrapper";
import { InputTitleCard } from "../../components/Wrapper";
import HandlePublishBlog from "../../controllers/PublishBlog";
import { PublishBlogButton, SelectBlogType } from "../../components/Publishblog";


function renderParagraphCard(text: string, id: string, currentParagraphIndex: string, setCurrentParagraph: (text: string) => void, setCurrentParagraphIndex: (id: string) => void, saveParagraph: (id: string) => void, addParagraph: (id: string, position: number) => void): React.ReactNode {

    const editParagraphCard = (text: string, id: string) => {

        // if the current paragraph is not empty save it

        saveParagraph(currentParagraphIndex);

        setCurrentParagraph(text);
        setCurrentParagraphIndex(id);
    }

    return (
        <ParagraphCard id={id} text={text} addParagraph={addParagraph} editParagraph={editParagraphCard} >
            <p key={id}>{text}</p>
        </ParagraphCard>
    );
}

function renderEditParagraphCard(id: string, currentParagraph: string, setCurrentParagraph: (text: string) => void, saveParagraph: (id: string) => void, addParagraph: (id: string, position: number) => void): React.ReactNode {

    const handleParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentParagraph(e.target.value);
    }

    // calculate height of textarea
    // width = 4/5 of the parent


    // const height:string = currentParagraph.split(' ').length * 1.5 + 'rem';

    // use scroll height of text area
    const height = document.getElementById('textarea')?.scrollHeight;
    // set width to 4/5 of the parent

    return (
        <ParagraphEditCard id={id} addParagraph={addParagraph} >
            <textarea key={id}
                id="textarea"
                className="w-full overflow-y-auto p-4"
                style={{ height: height }}
                value={currentParagraph}
                onChange={handleParagraphChange}
            ></textarea>

            <button onClick={() => saveParagraph(id)}>Save</button>
        </ParagraphEditCard>
    )
}


function WriteBlog(): React.ReactNode {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [paragraphs, setParagraphs] = useState<{ [id: string]: string }>({});

    const [currentParagraph, setCurrentParagraph] = useState<string>('');
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState<string>('');


    const publishBlog = async () => {
        HandlePublishBlog(title, type, paragraphs);
    }



    const saveParagraph = (id: string) => {

        if (currentParagraphIndex === '-1') {
            return;
        }

        if (currentParagraph === '') {

            // delete the paragraph if it is empty

            let p = Object.values(paragraphs);
            const pos = parseInt(id);

            p.splice(pos, 1);

            let newP: { [id: string]: string } = {};

            p.forEach((text, i) => {
                newP[i.toString()] = text;
            });

            setParagraphs(newP);





            setCurrentParagraph('');
            setCurrentParagraphIndex('-1');
            return;


        }

        // let p = { ...paragraphs };
        // p[id] = currentParagraph;
        setParagraphs({ ...paragraphs, [id]: currentParagraph });
        setCurrentParagraph('');
        setCurrentParagraphIndex('-1');
    }


    const addParagraph = (id: string, position: number) => {

        // await saveParagraph(currentParagraphIndex);

        // if (currentParagraphIndex !== '-1') {
        //     saveParagraph(currentParagraphIndex);
        // }

        console.log('addParagraph', id, position);
        console.log('currentParagraphIndex', currentParagraphIndex);
        console.log('currentParagraph', currentParagraph);
        console.log('paragraphs', paragraphs);


        let p = Object.values(paragraphs);
        const pos = parseInt(id);

        // if (position === 0) {
        //     p.splice(pos, 0, '');
        // } else {
        //     p.splice(pos + 1, 0, '');
        // }

        p.splice(position === 0 ? pos : pos + 1, 0, '');

        let newP: { [id: string]: string } = {};
        p.forEach((text, i) => {
            newP[i.toString()] = text;
        });

        setParagraphs(newP);
        setCurrentParagraphIndex((pos + position).toString());
        setCurrentParagraph('');

        console.log('newP', newP);
        console.log('currentParagraphIndex', currentParagraphIndex);
        console.log('currentParagraph', currentParagraph);
        console.log('paragraphs', paragraphs);
    }


    return (
        <WindowCard>
            <WrapperCard>


                <TitleCard>
                    <div className="justify-center m-2  col-span-1">

                        <div className="grid grid-cols-3 gap-4">

                            <div className="text-4xl font-bold text-center">Write Blog</div>
                            <SelectBlogType setType={setType} />
                            <PublishBlogButton publishBlog={publishBlog} />

                        </div>


                        <InputTitleCard label="Title" placeholder="Title" name="title" type="text" value={title} setValue={setTitle} />

                    </div>


                </TitleCard>

                <div className="z-10 text-sm shadow-lg w-40 m-4 ">
                    <button onClick={() => addParagraph('0', 0)}>
                        + add new para below
                    </button>
                </div>


                <ParagraphWrapperCard>

                    {Object.keys(paragraphs).map((id) => {
                        if (id === currentParagraphIndex) {

                            return renderEditParagraphCard(id, currentParagraph, setCurrentParagraph, saveParagraph, addParagraph)

                        } else {
                            return renderParagraphCard(paragraphs[id], id, currentParagraphIndex, setCurrentParagraph, setCurrentParagraphIndex, saveParagraph, addParagraph);
                        }
                    })}

                </ParagraphWrapperCard>



            </WrapperCard>
        </WindowCard>
    );
}

export default WriteBlog;
