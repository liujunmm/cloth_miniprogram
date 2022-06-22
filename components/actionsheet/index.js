Component({
    options: {},
    properties: {
        maskClass: {
            type: String,
            value: ''
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        mask: {
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        closeActionSheet: function closeActionSheet(e) {
            if (this.data.maskClosable) {
                this.setData({
                    show: false
                });
                this.triggerEvent('close');
            }
        }
    }
});