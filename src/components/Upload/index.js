import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { DropContainer,  UploadMessage } from './styles';

export default class Upload extends Component{
    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive){
            return <UploadMessage>Arraste arquivos aqui....</UploadMessage>
        }

        if(isDragReject){
            return <UploadMessage type="error">Arquivo não suportado.</UploadMessage>
        }

        return <UploadMessage type="success">Solte os arquivos aqui.</UploadMessage>
    };

    render(){
        const { onUpload } = this.props;

        return (
            <DropZone accept="image/*" onDropAccepted={onUpload}>
                { ( { getRootProps, getInputProps, isDragActive, isDragReject } ) => (
                   <DropContainer
                    { ... getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                    >
                        <input { ... getInputProps()}></input>
                        {this.renderDragMessage(isDragActive, isDragActive)}
                    </DropContainer>
                ) }

            </DropZone>
        );
    }
}