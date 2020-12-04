const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { json } = require('express');

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Project } = require("../../db/models");

const router = express.Router();


router.get('/:id', asyncHandler(async(req, res, next)=>{
 const {id} = req.params
 const projects = await Project.findAll({where: {userId:id}})
 return res.json({projects})
}))

router.post('/', asyncHandler(async(req,res, next)=>{
    const {id} = req.params
    const projects = await Project.create({})
    return res.json({projects})
}))

module.exports = router;