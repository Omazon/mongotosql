<template>
<el-container>
  <el-aside>
     <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-main>
    <el-row type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header">
          Enter Mysql Credentials
        </div>
        <el-form :model="form">
          <el-form-item label="Host">
            <el-input v-model="form.host"></el-input>
          </el-form-item>
          <el-form-item label="User">
            <el-input v-model="form.user"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="Database">
            <el-input v-model="form.database"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" @click="onConnect">Connect</el-button>
          </el-form-item>
        </el-form>
          <el-alert
          v-if="status_alert.message != null"
          :title="status_alert.message"
          @close="status_alert.message = null"
          :type="status_alert.type"
          show-icon>
        </el-alert>
      </el-card>
    </el-row>
  </el-main>
</el-container>
</template>
<script>
import axios from '@/plugins/axios'
  export default {
    data(){
      return{
        form:{
          host: 'sql10.freesqldatabase.com',
          user: 'sql10318391',
          password: 'swlNQKIwFm',
          database: 'sql10318391'
        },
        status_alert: {
          type: null,
          message: null
        },
        loading: false
      }
    },
    methods: {
      onConnect(){
        this.loading = true;
       axios.post('/api/mysql', this.form).then(res => {
          this.status_alert.message = res.data.message;
          this.status_alert.type = "success";
          this.loading = false;
        }).catch(err => {
          this.status_alert.message = err.data.err.sqlMessage;
          this.status_alert.type = "error";
          this.loading = false
        })
      }
    }
  }
</script>
<style lang="css">
  .box-card{
    width: 480px;
  }
</style>