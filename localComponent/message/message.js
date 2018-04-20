/**
 *提示消息组件
 * @type {Function}
 */
var Message = (function(){
    //消息类型
    var type = {
        success:'success',
        error:'error',
        info:'info',
        warning:'warning'
    }
    var message = {
        content:'null',
        type:type.info
    }
    return {
        type:type,
        alertMessage:alertMessage

    }

    /**
     * 关闭提示信息
     * @param closeNode {*|jQuery|HTMLElement}
     */
    function closeMessage(closeNode){
        closeNode.fadeOut(800,function(){closeNode.remove()});
    }

    /**
     * 显示提示信息
     * @param message
     * @param type
     */
    function alertMessage(message,type){
        $(document.body).append(buildMessageDom(message,type));
    }

    /**
     * 创建信息显示组件
     * @param message
     * @param type
     * @returns {*|jQuery|HTMLElement}
     */
    function buildMessageDom(message,type){
        var divContainer = $('<div></div>');
        var divClose = $('<div></div>');
        var divMessage = $('<div></div>');
        divClose.text('X');
        divContainer.attr('class','message-container');
        divClose.attr('class','message-close');
        divClose.click(function(){closeMessage(divContainer)});
        divMessage.html(message);
        divContainer.append(divClose);
        divContainer.append(divMessage);
        divContainer.fadeOut(8000,function(){divContainer.remove()});
        return divContainer;
    }
})
var message = new Message();