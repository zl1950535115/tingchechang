<template>
    <div class="box">
        <div class="box_top">
            <div class="box_top_left">
                <span>状态 : </span>
                <el-select v-model="value">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="box_top_right">
                <span>班级 : </span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="box_top_button">
                <el-button class="button" type="submit" icon="el-icon-search">查询</el-button>
            </div>
        </div>
        <div class='box_bottom'>
            <p class="tit">试卷列表</p>
            <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%;border-radius:'10px'" class="table" id="tabels">
                <el-table-column prop="class" label="班级" width="138"></el-table-column>
                <el-table-column prop="name" label="姓名" width="144"></el-table-column>
                <el-table-column prop="address" label="阅卷状态" width="171"></el-table-column>
                <el-table-column prop="start" label="开始时间" width="253"></el-table-column>
                <el-table-column prop="end" label="结束时间" width="253"></el-table-column>
                <el-table-column prop="pass" label="成材率" width="144"></el-table-column>
                <el-table-column label="操作" width="117">
                     <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small" class="options">批卷</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination_box">
                <el-pagination class="pagination"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="5"
                    layout="prev, pager, next,sizes,jumper"
                    :total="tableData.length">
                </el-pagination>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            class: '1609B',
            name: '	王子音',
            address: '未阅',
            start:"1553082795320",
            end:"1553089966000",
            pass:34308

          }, {
            class: '1609B',
            name: '	王子音',
            address: '未阅',
            start:"1553082795320",
            end:"1553089966000",
            pass:34308
          }, {
            class: '1609B',
            name: '	王子音',
            address: '未阅',
            start:"1553082795320",
            end:"1553089966000",
            pass:34308
          }],
           options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
          value: '',
          currentPage4:1,
          currentPage:1,
          pagesize:5
        }
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        handleSizeChange(val) {
            this.pagesize = val
        },
        handleCurrentChange(val) {
            this.currentPage = val
        }
    }
}
</script>

<style scoped>
    .box{
        position: relative;
        width: 100%;
        height: calc(100vh - 64px);
        box-sizing: border-box;
        padding:60px 24px 0 24px;
        background: #f0f2f5;
        margin-top: 64px;
        overflow: auto;
    }
    .box_top{
        width: 100%;
        height: 120px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        display: flex;
    }
    .box_top_left,.box_top_right,.box_top_button{
        margin-top: 30px;
        margin-left: 70px;
    }
    .box_top_left{
    margin-left: 60px;
    }
    .button{
        width:132px;
        height:32px;
        background:#0139FD;
        color: #fff;
        font-size: 14px;
    }
   .box_top span{
            font-size:14px;
        }
    .tit{
        width: 100%;
        padding: 10px 0px 0px 30px;
    }
    .has-gutter{
        background:rgba(0, 0, 0, 0.65);
    }
    .box_bottom{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        margin-top: 30px;
        margin-bottom:30px;
    }
    .table{
        width:100%;
        padding: 10px 30px 0 30px;
        box-sizing: border-box;
    }
   .options{
        font-size: 14px;
   }
   .pagination_box{
       width: 100%;
   }
   .pagination{
      float: right;
      padding: 15px 30px 30px 0;
     
   }
   .el-table::before{
       display: none;
   }
</style>
