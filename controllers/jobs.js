const Job = require('../models/job');

function jobsIndex(req, res, next) {
  Job
    .find()
    .exec()
    .then(jobs => res.json(jobs))
    .catch(next);
}

function jobsShow(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('jobs.createdBy')
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      res.json(job);
    })
    .catch(next);
}

function jobsCreate(req, res, next) {
  Job
    .create(req.body)
    .then(job => res.status(201).json(job))
    .catch(next);
}

function jobsUpdate(req, res, next) {
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      return Object.assign(job, req.body);
    })
    .then(job => job.save())
    .then(job => res.json(job))
    .catch(next);
}
