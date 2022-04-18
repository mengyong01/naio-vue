<template>
    <el-container class="layout">
        <el-aside width="auto" class="aside">
            <MenuBar></MenuBar>
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header></Header>
            </el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>
    
<script setup lang='ts'>
    import Header from './header/Header.vue'
    import MenuBar from './menu/MenuBar.vue'
</script>
    
<style lang="less" scoped>
    .layout{
        height: 100%;
        .aside{
            background-color: rgb(48, 65, 86);
        }
        .header{
            height: 50px;
            border-bottom: 1px solid #e5e5e5;
        }
        .main{
            // background-color: lightblue;
        }
    }
</style>